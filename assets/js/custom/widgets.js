"use strict";

// Class definition
var KTWidgets = function () {
    
    // Daterangepicker
    var initDaterangepicker = function () {
        if (!document.querySelector('#kt_dashboard_daterangepicker')) {
            return;
        }

        var picker = $('#kt_dashboard_daterangepicker');
        var start = moment();
        var end = moment();

        function cb(start, end, label) {
            var title = '';
            var range = '';

            if ((end - start) < 100 || label == 'Today') {
                title = 'Today:';
                range = start.format('MMM D');
            } else if (label == 'Yesterday') {
                title = 'Yesterday:';
                range = start.format('MMM D');
            } else {
                range = start.format('MMM D') + ' - ' + end.format('MMM D');
            }

            $('#kt_dashboard_daterangepicker_date').html(range);
            $('#kt_dashboard_daterangepicker_title').html(title);
        }

        picker.daterangepicker({
            direction: KTUtil.isRTL(),
            startDate: start,
            endDate: end,
            opens: 'left',
            applyClass: 'btn-primary',
            cancelClass: 'btn-light-primary',
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);

        cb(start, end, '');
    }    

    // Dark mode toggler
    var initDarkModeToggle = function() {
        var toggle = document.querySelector('#kt_user_menu_dark_mode_toggle');
        
        if (toggle) {
            toggle.addEventListener('click', function() {
                window.location.href = this.getAttribute('data-kt-url');
            });
        }
    }

    // Public methods
    return {
        init: function () {
            // Daterangepicker
            initDaterangepicker();
            
            // Dark Mode
            initDarkModeToggle();    
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTWidgets;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTWidgets.init();
});
