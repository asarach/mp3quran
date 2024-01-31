import { postReport } from './services';

export default class ReportSora {
    constructor(params) {
        this.read = params.read;
        this.sora = params.sora;
        this.prefix = params.prefix;
    }
    showModal() {
        $("#report_model").modal("show");
    }
    submitReport() {
        const data = {
            note: $("#reportNote").val(),
        }
        if (data.note.length < 10) {
            $("#report_model .text-danger").show();
        } else {
            const url = this.prefix + "/" + this.read + "/" + this.sora + "/report";
            postReport(url, data);
        }
    }
}
