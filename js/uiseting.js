const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [4, 98],
    connect: true,



    range: {
        'min': 0,
        'max': 150
    }

});
const nonLinearStepSliderValueElement = document.querySelector('.valueRange');

slider.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = values.map(function (value) {
        return parseInt(value).toFixed(0)
    }).join('<span class="range-line color-blue"> - </span>');

});


const containerEl = document.querySelector('.range-table');

const mixer = mixitup(containerEl, {
    controls: {
        toggleLogic: 'and'
    }
});