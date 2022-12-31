import { notify, trans } from './utils';


export function postReport(url, data) {
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (response) {
            $("#report_model").modal("hide");
            if (response.success) {
                $("#reportNote").val('')
                notify(trans("text.reported"), 'success', trans("text.sora-reported-success"));
            } else {
                notify(trans("text.not-reported"), 'warn', trans("text.sora-reported-warn"));
            }
        },
        error: function (data) {
            notify(trans("text.not-reported"), 'warn', trans("text.sora-reported-warn"));
        },
    });
}