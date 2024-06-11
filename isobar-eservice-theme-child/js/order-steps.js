const order = {
    init: function() {
        order.goToStep();
    },
    goToStep: function() {
        $(document).on("click", ".change-step", (event) => {
            const dir = $(event.target).data("dir");
            const currStepNumber = $(event.target).data("curr-step");
            const nextStepNumber = currStepNumber + 1;
            const prevStepNumber = currStepNumber - 1;

            $(".step_" + currStepNumber).hide();

            if (dir === 'next') {
                $(".step_" + nextStepNumber).show();
            } else {
                $(".step_" + prevStepNumber).show();
            }
        })
    }
}

function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

domReady(function () {
    if (!document.body) {
        return;
    } else {
        order.init();
    }
});
