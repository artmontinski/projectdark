import * as vscode from 'vscode';

let logDimmingEnabled = false;
let statusBarItem: vscode.StatusBarItem;
let decorationType: vscode.TextEditorDecorationType;

export function activate(context: vscode.ExtensionContext) {
    console.log('extension: ACTIVE!');

    decorationType = vscode.window.createTextEditorDecorationType({
        opacity: '0.3',
        color: 'rgba(150, 150, 150, 0.5)'
    });

    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'projectdark.toggleLogDimming';
    context.subscriptions.push(statusBarItem);

    updateStatusBar();

    let disposable = vscode.commands.registerCommand('projectdark.toggleLogDimming', toggleLogDimming);
    context.subscriptions.push(disposable);
}

function updateStatusBar() {
    statusBarItem.text = logDimmingEnabled ? "$(eye-closed) Logs Dimmed" : "$(eye) Dim Logs";
    statusBarItem.show();
}

function toggleLogDimming() {
    logDimmingEnabled = !logDimmingEnabled;
    updateStatusBar();

    const editor = vscode.window.activeTextEditor;
    if (editor) {
        if (logDimmingEnabled) {
            applyLogDimming(editor);
        } else {
            editor.setDecorations(decorationType, []);
        }
    }
}

function applyLogDimming(editor: vscode.TextEditor) {
    const document = editor.document;
    const text = document.getText();
    const logPattern = /this\.loggerService\.(info|error|warn|debug)\([\s\S]*?\);/g;

    const ranges: vscode.Range[] = [];
    let match;
    while ((match = logPattern.exec(text))) {
        const startPos = document.positionAt(match.index);
        const endPos = document.positionAt(match.index + match[0].length);
        ranges.push(new vscode.Range(startPos, endPos));
    }

    editor.setDecorations(decorationType, ranges);
}

export function deactivate() {}
