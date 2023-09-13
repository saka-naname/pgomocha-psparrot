import React from "react";

import "./styles.css";
import { PanelController } from "./controllers/PanelController.jsx";
import { PsParrot } from "./panels/PsParrot";

import { entrypoints } from "uxp";

const psParrotController = new PanelController(() => <PsParrot/>, {
    id: "psparrot",
    menuItems: [
        { id: "reload1", label: "プラグインを再読み込み", enabled: true, checked: false, oninvoke: () => location.reload() },
    ]
});

entrypoints.setup({
    plugin: {
        create(plugin) {
            /* optional */ console.log("created", plugin);
        },
        destroy() {
            /* optional */ console.log("destroyed");
        }
    },
    panels: {
        psparrot: psParrotController,
    }
});
