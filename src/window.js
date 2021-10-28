let extensionWindow = null;

export default () => {
    if (extensionWindow && !extensionWindow.contentWindow.closed) {
        extensionWindow.focus();
        return;
    }

    whale.app.window.create(
        "index.html",
        {
            innerBounds: {
                width: 400,
                height: 460,
                minWidth: 400,
                minHeight: 460,
            },
            resizable: true,
            // alphaEnabled: true
        },
        (window) => {
            extensionWindow = window;

            window.onClosed.addListener(() => {
                extensionWindow = null;
            });
        }
    );
};
