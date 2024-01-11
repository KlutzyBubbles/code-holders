import $ from "jquery";
import * as M from '@materializecss/materialize'

$(() => {
    var tabs = $('.tabs')
    if (tabs !== undefined && tabs !== null && tabs.length > 0) {
        console.log(M);
        console.log(M.Tabs);
        M.Tabs.init(tabs[0], {});
    }
})
