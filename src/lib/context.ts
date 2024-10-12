
declare interface EditorElement {
    originElement: Element;
    topArea: Element;
    relative: Element;
    toolbar: Element;
    resizingBar: Element;
    navigation: Element;
    charWrapper: Element;
    charCounter: Element;
    editorArea: Element;
    wysiwygFrame: Element;
    wysiwyg: Element;
    code: Element;
    placeholder: Element;
    loading: Element;
    lineBreaker: Element;
    resizeBackground: Element;
}

export interface Context {
    element: EditorElement;
    tool: Record<string, Element>;
    options: SunEditorOptions;
    option: SunEditorOptions;
    [key: string]: any;
}

type Constructor = {
    constructed: Record<string, Element|null>;
    options: SunEditorOptions,
    plugins: Plugin[],
    pluginCallButtons: Record<string, Element>,
    _icons: Record<string, string>
};

/**
 * @description Elements and variables you should have
 * @param {Element} element textarea element
 * @param {object} cons Toolbar element you created
 * @param {JSON|Object} options Inserted options
 * @returns {Object} {Elements, variables of the editor, option}
 * @private
 */
export const Context = function (element: HTMLElement, cons: Constructor, options: SunEditorOptions) {
    return {
        element: {
            originElement: element,
            topArea: cons._top,
            relative: cons._relative,
            toolbar: cons._toolBar,
            _toolbarShadow: cons._toolbarShadow,
            _buttonTray: cons._toolBar.querySelector('.se-btn-tray'),
            _menuTray: cons._menuTray,
            resizingBar: cons._resizingBar,
            navigation: cons._navigation,
            charWrapper: cons._charWrapper,
            charCounter: cons._charCounter,
            editorArea: cons._editorArea,
            wysiwygFrame: cons._wysiwygArea,
            wysiwyg: cons._wysiwygArea, // if (options.iframe) cons._wysiwygArea.contentDocument.body
            code: cons._codeArea,
            placeholder: cons._placeholder,
            loading: cons._loading,
            lineBreaker: cons._lineBreaker,
            lineBreaker_t: cons._lineBreaker_t,
            lineBreaker_b: cons._lineBreaker_b,
            resizeBackground: cons._resizeBack,
            _stickyDummy: cons._stickyDummy,
            _arrow: cons._arrow,
            _focusTemp: cons._focusTemp
        },
        tool: {
            cover: cons._toolBar.querySelector('.se-toolbar-cover'),
            bold: cons._toolBar.querySelector('[data-command="bold"]'),
            underline: cons._toolBar.querySelector('[data-command="underline"]'),
            italic: cons._toolBar.querySelector('[data-command="italic"]'),
            strike: cons._toolBar.querySelector('[data-command="strike"]'),
            sub: cons._toolBar.querySelector('[data-command="SUB"]'),
            sup: cons._toolBar.querySelector('[data-command="SUP"]'),
            undo: cons._toolBar.querySelector('[data-command="undo"]'),
            redo: cons._toolBar.querySelector('[data-command="redo"]'),
            save: cons._toolBar.querySelector('[data-command="save"]'),
            outdent: cons._toolBar.querySelector('[data-command="outdent"]'),
            indent: cons._toolBar.querySelector('[data-command="indent"]'),
            fullScreen: cons._toolBar.querySelector('[data-command="fullScreen"]'),
            showBlocks: cons._toolBar.querySelector('[data-command="showBlocks"]'),
            codeView: cons._toolBar.querySelector('[data-command="codeView"]'),
            dir: cons._toolBar.querySelector('[data-command="dir"]'),
            dir_ltr: cons._toolBar.querySelector('[data-command="dir_ltr"]'),
            dir_rtl: cons._toolBar.querySelector('[data-command="dir_rtl"]')
        },
        options: options,
        option: options
    };
};

export default Context;