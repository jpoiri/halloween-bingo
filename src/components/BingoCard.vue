<script setup>
import { ref } from 'vue';

const props = defineProps({
    values: {
        type: Array,
        required: true
    },
    gameMode: {
        type: String,
        default: 'line',
        validator(value, props) {
            return ['line', 'card', 'x', 'corners', 'edges'].includes(value)
        }  
    }
});

const emit = defineEmits(['onBingo', 'onCellClick']);

const values = [...props.values.slice(0, 12), 'free', ...props.values.slice(12)];

const cells = ref([]);

values.forEach((value) => {
    cells.value.push({
        value,
        selected: value === 'free' ? true : false,
        free: value === 'free' ? true : false
    })
})

const onCellClick = cell => {
    cell.selected = !cell.selected;
    if (isBingo(cells.value)) {
        emit('onBingo');
    }
}

function isCellSelected(cell) {
    return cell.selected;
}

function isCellsSelected(cells, selectedCellIndexes = []) {
    return cells.filter( (cell, index) => {
        return selectedCellIndexes.includes(index);
    }).every(isCellSelected);
}

function isHorizontalLine(cells) {
    return isCellsSelected(cells, [0, 1, 2, 3, 4]) 
    || isCellsSelected(cells, [5, 6, 7, 8, 9]) 
    || isCellsSelected(cells, [10, 11, 12, 13, 14])
    || isCellsSelected(cells, [15, 16, 17, 18, 19])
    || isCellsSelected(cells, [20, 21, 22, 23, 24]);
}

function isVerticalLine(cells) {
    return isCellsSelected(cells, [0, 5, 10, 15, 20]) 
    || isCellsSelected(cells, [1, 6, 11, 16, 21]) 
    || isCellsSelected(cells, [2, 7, 12, 17, 22])
    || isCellsSelected(cells, [3, 8, 13, 18, 23])
    || isCellsSelected(cells, [4, 9, 14, 19, 24]);
}

function isDiagonalLine(cells) {
    return isCellsSelected(cells, [0, 6, 18, 24]) 
    || isCellsSelected(cells, [4, 8, 16, 20]);
}

function isFullCard(cells) {
    return cells.every(isCellSelected);
}

function isX(cells) {
    return isCellsSelected(cells, [0, 6, 18, 24]) 
    && isCellsSelected(cells, [4, 8, 16, 20]);
}

function isCorners(cells) {
    return isCellsSelected(cells, [0, 4, 20, 24]);
}

function isEdges(cells) {
    return isCellsSelected(cells, [0, 1, 2, 3, 4, 5, 9, 10, 13, 14, 15, 19, 24]);
}

function isBingo(cells) {
    switch(props.gameMode) {
        case 'card':
            return isFullCard(cells);
        case 'x':
            return isX(cells);
        case 'corners':
            return isCorners(cells);
        case 'edges':
            return isEdges(cells);
        default: 
            return isHorizontalLine(cells) || isVerticalLine(cells) || isDiagonalLine(cells);
    }
}

</script>

<template>

<div class="container">
    <template v-for="cell in cells" :key="cell.index">
        <div v-if="cell.free" class="item free-space">
            <slot />
        </div>
        <div v-else class="item" :class="{ 'item-selected' : cell.selected }" @click="onCellClick(cell)">
            {{ cell.value }}
        </div>
    </template>
</div>

</template>
<style scoped>

@font-face {
    font-family: "halloween";
    src: url("../assets/halloween.otf");
}
.container {
    display: grid;
    grid-template-columns: repeat(5, 140px);
    grid-template-rows: repeat(5, 140px);
    gap: 10px;
    margin: 0;
    padding: 0;
    justify-content: center;
    overflow: auto;
}

.item {
    list-style-type: none;
    background-color: black;
    color: white;
    text-align: center;
    border: 4px solid white;
    border-radius: 4px;
    align-content: center;
    font-size: 1.5rem;
    padding: 10px;
    transition: ease-in 200ms;
}
.item:hover {
    cursor: pointer;
}
.free-space.item:hover {
    cursor: initial;
}
.item-selected {
    color: darkorange;
}

/* tablet */
@media (max-width: 1050px) {
   .container {
        grid-template-columns: repeat(5, 100px);
        grid-template-rows: repeat(5, 100px);
   }
   .item {
       font-size: 1rem;
   }
}
</style>