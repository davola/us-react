import React from "react";

export class ServiceSelector {
    public constructor(private context: string) {}
    public init() {
        return this.context;
        // this.$modal = $('.serviceModal');
        // $el.on('click', this.click);
        // $('button.btn-close,.serviceModal').click(this.closeModal);
    }

    public click(e: React.MouseEvent) {
        e.preventDefault();
        alert('work type click ' + this.context)
        // $('body').addClass('freeze');
        // uS.controller.ServiceSelector.$modal.addClass('open');
    }

    public closeModal() {
        // e.preventDefault();
        // // avoid click if loading
        // if (uS.controller.ServiceSelector.$modal.hasClass('loading')) return false;
        // // do close
        // uS.controller.ServiceSelector.doCloseModal();
    }

    public doCloseModal() {
        // $('body').removeClass('freeze');
        // uS.controller.ServiceSelector.$modal.removeClass('open');
    }
}