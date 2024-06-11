
const modal = {
    init: function() {
        this.openModal();
        this.openOrderFormModule();
        this.closeModal();
        this.toggleBoxes();
        // this.collectServiceNames();
    },
    services: [],
    payments: [],
    closeModal: function() {
        $(document).on("click", ".modal-background-product-page, .close-modal, .buttons-left", () => {
            $(".modal-background-product-page, .payments-product, .order-form-product-page").removeClass("active");
            // modal.removeCloseElementCloseElement();
        })
    },
    openModal: function() {
        let isModalActive = false;
        $(document).on("click", ".toggle-modal:not(.disabled)", () => {
            $(".modal-background-product-page, .payments-product").addClass("active");
            isModalActive = true;
            if (isModalActive) modal.createCloseElement();
        })
    },
    openOrderFormModule: function() {
        $(document).on("click", ".change-step", () => {
            $(".payments-product, .order-form-product-page ").toggleClass("active");
            modal.createCloseElement();
        })
    },
    createCloseElement: function() {
        $(".payments-product ").append("<div class='close-modal'>x</div>");
    },
    removeCloseElement: function() {
        $(".close-modal").remove();
    },
    getServices: function() {
        this.services = [];

        $(".payments-product-services-item").remove();
        $(".services-section .selectable-box-item").each(function() {
            const isSelectedService = $(this).hasClass("active") ? true : false;
            modal.services.push({
                name: $(this).find("h3").text(),
                srcImg: $(this).find("img").attr('src'),
                isSelected: isSelectedService,
            });
        })
        this.showServices();
    },
    getPayments: function() {
        this.payments = [];
        $(".payments-items .item").each(function() {
            const isSelectedPayment = $(this).find("input").is(':checked') ? true : false;
            // const isSelectedPayment = $(this).hasClass("active") ? true : false;
            modal.payments.push({
                name: $(this).find("h3").text(),
                srcImg: $(this).find("img").attr('src'),
                isSelected: isSelectedPayment,
            });
        })

    },
    showServices: function() {
        this.services.forEach((service) => {
            $(".payments-product-selected-services").
                append(`<div class="payments-product-services-item ${service.isSelected ? 'active' : ''}">
                            ${service.name}<img src="${service.srcImg}" alt=""/>
                        </div>`)
        })
    },
    toggleBorderItem: function() {
        $('.selectable-box-item .main-item input:checkbox').change(function () {
            modal.getServices();
            modal.setDisabledButtonModal();
            if ($(this).is(':checked')) {
                $(this).closest(".selectable-box-item").addClass("active");
                $(this).closest(".active.with-subpayments").find(".selectable-box-item-subpayments input").attr("disabled", false);
            } else {
                $(this).closest(".selectable-box-item").removeClass("active");
                $(this).closest(".with-subpayments").find(".selectable-box-item-subpayments input").attr("disabled", true);
            }
        });
    },
    toggleBoxes: function() {
        $('.selectable-box-item .main-item input:checkbox').change(function () {
            if ($(this).closest(".payments-items").length) {
                modal.getPayments();
                console.log(modal.payments);
            }
            if ($(this).closest(".services-product-page")) {
                modal.getServices();
                modal.setDisabledButtonModal();
            }
            if ($(this).is(':checked')) {
                $(this).closest(".selectable-box-item").addClass("active");
                $(this).closest(".active.with-subpayments").find(".selectable-box-item-subpayments input").attr("disabled", false);
            } else {
                $(this).closest(".selectable-box-item").removeClass("active");
                $(this).closest(".with-subpayments").find(".selectable-box-item-subpayments input").attr("disabled", true);
            }
        });        
    },
    setDisabledButtonModal: function() {
        if (!$(".toggle-modal").hasClass("disabled")) {
            $(".toggle-modal").addClass("disabled");
        };
        this.services.forEach(service => {
            if (service.isSelected) {
                $(".toggle-modal").removeClass("disabled");
                return;
            }
        })
    },
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
        modal.init();
    }
});
