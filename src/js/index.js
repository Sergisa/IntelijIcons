import '../scss/index.scss';
import Modal from './Modal';
import SnackBar from "./SnackBar";

const $modalObject = Modal.create();
$modalObject.appendTo('body');
const myModal = new Modal(document.getElementById('exampleModal'), {
    keyboard: false
});
myModal.setTitle("Hello");

const $leftCardTitle = $('div#iconsList .card-title');
const $leftCardBody = $('div#iconsList .card-body');
const $leftCardText = $('div#iconsList .card-text');
$(function () {
    $('button.btn').on('click', function (e) {
        const $spinner = $(this).prev();
        $leftCardTitle.html($(e.currentTarget).parents('li').get(0).id);
        $spinner.toggleClass('d-none');
        //$('div#iconsList .card-title').html($(e.currentTarget).parents('li').get(0).id);
        $.getJSON("data.json", function (data) {
            $spinner.toggleClass('d-none');
            for (const iconSet of data) {
                if (iconSet.set === $(e.currentTarget).parents('li').get(0).id) {
                    prepareIconSet(iconSet)
                }
            }
        });
    });
});

function prepareIconSet(iconSet) {
    $leftCardText.html('');
    for (const icon of iconSet.icons) {
        buildBadge(icon).appendTo($leftCardText);
    }
}

function iconSpanClick(event) {
    var data = $(event.target).data('iconData')
    myModal.setTitle(data.name);
    myModal.setBody(`<img src="https://intellij-icons.jetbrains.design/icons/${data.set}/${data.section}/${data.name}.${data.kind}">`);
    //myModal.setBody(`<img src="https://intellij-icons.jetbrains.design/icons/${data.java.replaceAll('.', '/')}.${data.kind}">`);
    myModal.show();
}

function buildBadge(iconData) {
    return $(document.createElement('span'))
        .attr({
            role: 'button',
            class: 'badge me-2 fw-normal text-secondary',
        }).data('iconData', iconData)
        .addClass(iconData.kind === 'svg' ? 'bg-light' : 'bg-light border-1 border border-primary')
        .on('click', iconSpanClick)
        .attr('path', iconData.java)
        .html(iconData.name);
}

