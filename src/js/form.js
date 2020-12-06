const generateCheckbox = (items, parentBlock) => {
	parentBlock.html('');
	items.forEach((item) => {
		parentBlock.append(`<div class="skill__item">
		<input class="custom-checkbox" type="checkbox" id="checkbox-${item.id}" name="checkbox" value="${item.name}">
		<label for="checkbox-${item.id}">${item.name}</label>
		</div>`);

	})
};

$().ready(() => {
	const items = [
		{
			id: 1,
			name: 'html5'
		},
		{
			id: 2,
			name: 'sass'
		},
		{
			id: 3,
			name: 'vanillajs'
		},
		{
			id: 4,
			name: 'git'
		},
		{
			id: 5,
			name: 'css3'
		},
		{
			id: 6,
			name: 'less'
		},
		{
			id: 7,
			name: 'angular'
		},
		{
			id: 8,
			name: 'foundation'
		},
		{
			id: 9,
			name: 'бэм'
		},
		{
			id: 10,
			name: 'gulp'
		},
		{
			id: 11,
			name: 'jquery'
		},
		{
			id: 12,
			name: 'bootstrap'
		}
	];
	generateCheckbox(items, $('.skills__items'));
});

$(".speedometer").click(function (e) {
	let box = $(".speedometer__box");
	let boxCenter = [box.offset().left + box.width()/2, box.offset().top + box.height()];
	let angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI);
	box.css({'transform': 'rotate(' + angle + 'deg)'});
	let countValue = angle + 100;
	numAnimate(countValue);
});

function numAnimate(angle) {
	var number = 0;
	setInterval(function () {
		number++;
		if (number <= angle) {
			$('.level-sign__count').text(number);
		}
	}, 400/angle);
}

