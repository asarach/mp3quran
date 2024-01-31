<div id="report_model" class="modal delet-modal fade confirmation" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="form-group mb-0">
                    <label for="exampleInputNote">{{ trans("text.note") }}</label>
                    <textarea class="form-control" id="reportNote" rows="2"></textarea>
                    <small class="form-text text-danger" style=" display: none;">
                        {{ trans("text.please-provide-detailed-note") }}
                    </small>
                </div>
            </div>
            <div class="modal-footer">
                <div class="report_btns">
                    <button id="submitReport" type="button" class="btn btn-info">
                        {{ trans("text.send") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>