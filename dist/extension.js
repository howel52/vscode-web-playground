!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("vscode")},function(e,t,r){"use strict";var i=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))((function(s,o){function n(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(n,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const s=r(0),o=r(2);function n(e,t){e&&"/sample-folder/large.ts"===e.fileName?t.set(e.uri,[{code:"",message:"cannot assign twice to immutable variable `storeHouses`",range:new s.Range(new s.Position(4,12),new s.Position(4,32)),severity:s.DiagnosticSeverity.Error,source:"",relatedInformation:[new s.DiagnosticRelatedInformation(new s.Location(e.uri,new s.Range(new s.Position(1,8),new s.Position(1,9))),"first assignment to `x`")]},{code:"",message:"function does not follow naming conventions",range:new s.Range(new s.Position(7,10),new s.Position(7,23)),severity:s.DiagnosticSeverity.Warning,source:""}]):t.clear()}t.activate=function(e){var t,r;if("object"==typeof navigator){let a=void 0,l=void 0;for(const e of s.workspace.workspaceFolders)if("github"===e.uri.scheme||"codespace"===e.uri.scheme){[a,l]=e.uri.authority.split("+");break}if((null===(t=s.workspace.workspaceFolders)||void 0===t?void 0:t.some(e=>e.uri.scheme===o.MemFS.scheme))||s.workspace.workspaceFile.scheme===o.MemFS.scheme){(function(e){const t=new o.MemFS;return e.subscriptions.push(t),t})(e).seed(),function(e){const t=s.languages.createDiagnosticCollection("test");s.window.activeTextEditor&&n(s.window.activeTextEditor.document,t);e.subscriptions.push(s.window.onDidChangeActiveTextEditor(e=>{e&&n(e.document,t)}))}(e),function(){class e{constructor(e){this.workspaceRoot=e}provideTasks(){return i(this,void 0,void 0,(function*(){return this.getTasks()}))}resolveTask(e){if(e.definition.flavor){const t=e.definition;return this.getTask(t.flavor,t.flags?t.flags:[],t)}}getTasks(){if(void 0!==this.tasks)return this.tasks;const e=[["watch","incremental"],["incremental"],[]];return this.tasks=[],["32","64"].forEach(t=>{e.forEach(e=>{this.tasks.push(this.getTask(t,e))})}),this.tasks}getTask(r,o,n){return void 0===n&&(n={type:e.CustomBuildScriptType,flavor:r,flags:o}),new s.Task2(n,s.TaskScope.Workspace,`${r} ${o.join(" ")}`,e.CustomBuildScriptType,new s.CustomExecution(()=>i(this,void 0,void 0,(function*(){return new t(this.workspaceRoot,r,o,()=>this.sharedState,e=>this.sharedState=e)}))))}}e.CustomBuildScriptType="custombuildscript";class t{constructor(e,t,r,i,o){this.workspaceRoot=e,this.flags=r,this.getSharedState=i,this.setSharedState=o,this.writeEmitter=new s.EventEmitter,this.onDidWrite=this.writeEmitter.event,this.closeEmitter=new s.EventEmitter,this.onDidClose=this.closeEmitter.event}open(e){if(this.flags.indexOf("watch")>-1){let e=this.workspaceRoot+"/customBuildFile";this.fileWatcher=s.workspace.createFileSystemWatcher(e),this.fileWatcher.onDidChange(()=>this.doBuild()),this.fileWatcher.onDidCreate(()=>this.doBuild()),this.fileWatcher.onDidDelete(()=>this.doBuild())}this.doBuild()}close(){this.fileWatcher&&this.fileWatcher.dispose()}doBuild(){return i(this,void 0,void 0,(function*(){return new Promise(e=>{this.writeEmitter.fire("Starting build...\r\n");let t=this.flags.indexOf("incremental")>-1;t&&(this.getSharedState()?this.writeEmitter.fire("Using last build results: "+this.getSharedState()+"\r\n"):(t=!1,this.writeEmitter.fire("No result from last build. Doing full build.\r\n"))),setTimeout(()=>{const t=new Date;this.setSharedState(t.toTimeString()+" "+t.toDateString()),this.writeEmitter.fire("Build complete.\r\n\r\n"),-1===this.flags.indexOf("watch")&&(this.closeEmitter.fire(),e())},t?1e3:4e3)})}))}}s.tasks.registerTaskProvider(e.CustomBuildScriptType,new e(s.workspace.rootPath))}(),s.commands.executeCommand("vscode.open",s.Uri.parse("memfs:/sample-folder/file.ts"))}else(null===(r=s.workspace.workspaceFolders)||void 0===r?void 0:r.some(e=>"github"===e.uri.scheme||"codespace"===e.uri.scheme))&&(s.commands.executeCommand("setContext","github-context",!0),a&&l&&s.commands.registerCommand("vscode.webPlayground.cloneRepository",()=>{s.env.openExternal(s.Uri.parse(`${s.env.uriScheme}://vscode.git/clone?url=${encodeURIComponent(`https://github.com/${a}/${l}.git`)}`))}))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MemFS=t.Directory=t.File=void 0;const i=r(0),s=r(3);class o{constructor(e,t){this.uri=e,this.type=i.FileType.File,this.ctime=Date.now(),this.mtime=Date.now(),this.size=0,this.name=t}}t.File=o;class n{constructor(e,t){this.uri=e,this.type=i.FileType.Directory,this.ctime=Date.now(),this.mtime=Date.now(),this.size=0,this.name=t,this.entries=new Map}}t.Directory=n;const a=new TextEncoder;class l{constructor(){this.root=new n(i.Uri.parse("memfs:/"),""),this._emitter=new i.EventEmitter,this._bufferedEvents=[],this.onDidChangeFile=this._emitter.event,this._textDecoder=new TextDecoder,this.disposable=i.Disposable.from(i.workspace.registerFileSystemProvider(l.scheme,this,{isCaseSensitive:!0}),i.workspace.registerFileSearchProvider(l.scheme,this),i.workspace.registerTextSearchProvider(l.scheme,this))}dispose(){var e;null===(e=this.disposable)||void 0===e||e.dispose()}seed(){this.createDirectory(i.Uri.parse("memfs:/sample-folder/")),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.txt"),a.encode("foo"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.html"),a.encode('<html><body><h1 class="hd">Hello</h1></body></html>'),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.js"),a.encode('console.log("JavaScript")'),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.json"),a.encode('{ "json": true }'),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.ts"),a.encode("cons.bar.for"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.css"),a.encode("* { color: green; }"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.md"),a.encode(s.debuggableFile),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.xml"),a.encode('<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>'),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.py"),a.encode('import base64, sys; base64.decode(open(sys.argv[1], "rb"), open(sys.argv[2], "wb"))'),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.yaml"),a.encode("- just: write something"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.jpg"),s.getImageFile(),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/file.php"),a.encode('<?php echo "Hello World!"; ?>'),{create:!0,overwrite:!0}),this.createDirectory(i.Uri.parse("memfs:/sample-folder/folder/")),this.createDirectory(i.Uri.parse("memfs:/sample-folder/workspaces/")),this.createDirectory(i.Uri.parse("memfs:/sample-folder/large/")),this.createDirectory(i.Uri.parse("memfs:/sample-folder/xyz/")),this.createDirectory(i.Uri.parse("memfs:/sample-folder/xyz/abc")),this.createDirectory(i.Uri.parse("memfs:/sample-folder/xyz/def")),this.writeFile(i.Uri.parse("memfs:/sample-folder/folder/empty.txt"),new Uint8Array(0),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/folder/empty.foo"),new Uint8Array(0),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/folder/file.ts"),a.encode("let a:number = true; console.log(a);"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/large/rnd.foo"),function(e,t=155){let r=[];for(let i=0;i<e;i++){let e="";for(;e.length<t;)e+=Math.random().toString(2+i%34).substr(2);r.push(e.substr(0,t))}return a.encode(r.join("\n"))}(5e4),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/xyz/UPPER.txt"),a.encode("UPPER"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/xyz/upper.txt"),a.encode("upper"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/xyz/def/foo.md"),a.encode("*MemFS*"),{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/workspaces/mem.code-workspace"),a.encode(JSON.stringify({folders:[{name:"sample-folder-large",uri:"memfs:/sample-folder/large"},{name:"sample-folder-xyz",uri:"memfs:/sample-folder/xyz"},{name:"sample-folder-folder",uri:"memfs:/sample-folder/folder"}]},void 0,"\t")),{create:!0,overwrite:!0}),this.createDirectory(i.Uri.parse("memfs:/sample-folder/encodings/")),this.writeFile(i.Uri.parse("memfs:/sample-folder/encodings/windows1251.txt"),s.windows1251File,{create:!0,overwrite:!0}),this.writeFile(i.Uri.parse("memfs:/sample-folder/encodings/gbk.txt"),s.gbkFile,{create:!0,overwrite:!0})}stat(e){return this._lookup(e,!1)}readDirectory(e){const t=this._lookupAsDirectory(e,!1);let r=[];for(const[e,i]of t.entries)r.push([e,i.type]);return r}readFile(e){const t=this._lookupAsFile(e,!1).data;if(t)return t;throw i.FileSystemError.FileNotFound()}writeFile(e,t,r){let s=this._basename(e.path),a=this._lookupParentDirectory(e),l=a.entries.get(s);if(l instanceof n)throw i.FileSystemError.FileIsADirectory(e);if(!l&&!r.create)throw i.FileSystemError.FileNotFound(e);if(l&&r.create&&!r.overwrite)throw i.FileSystemError.FileExists(e);l||(l=new o(e,s),a.entries.set(s,l),this._fireSoon({type:i.FileChangeType.Created,uri:e})),l.mtime=Date.now(),l.size=t.byteLength,l.data=t,this._fireSoon({type:i.FileChangeType.Changed,uri:e})}rename(e,t,r){if(!r.overwrite&&this._lookup(t,!0))throw i.FileSystemError.FileExists(t);let s=this._lookup(e,!1),o=this._lookupParentDirectory(e),n=this._lookupParentDirectory(t),a=this._basename(t.path);o.entries.delete(s.name),s.name=a,n.entries.set(a,s),this._fireSoon({type:i.FileChangeType.Deleted,uri:e},{type:i.FileChangeType.Created,uri:t})}delete(e){let t=e.with({path:this._dirname(e.path)}),r=this._basename(e.path),s=this._lookupAsDirectory(t,!1);if(!s.entries.has(r))throw i.FileSystemError.FileNotFound(e);s.entries.delete(r),s.mtime=Date.now(),s.size-=1,this._fireSoon({type:i.FileChangeType.Changed,uri:t},{uri:e,type:i.FileChangeType.Deleted})}createDirectory(e){let t=this._basename(e.path),r=e.with({path:this._dirname(e.path)}),s=this._lookupAsDirectory(r,!1),o=new n(e,t);s.entries.set(o.name,o),s.mtime=Date.now(),s.size+=1,this._fireSoon({type:i.FileChangeType.Changed,uri:r},{type:i.FileChangeType.Created,uri:e})}_lookup(e,t){let r=e.path.split("/"),s=this.root;for(const o of r){if(!o)continue;let r;if(s instanceof n&&(r=s.entries.get(o)),!r){if(t)return;throw i.FileSystemError.FileNotFound(e)}s=r}return s}_lookupAsDirectory(e,t){let r=this._lookup(e,t);if(r instanceof n)return r;throw i.FileSystemError.FileNotADirectory(e)}_lookupAsFile(e,t){let r=this._lookup(e,t);if(r instanceof o)return r;throw i.FileSystemError.FileIsADirectory(e)}_lookupParentDirectory(e){const t=e.with({path:this._dirname(e.path)});return this._lookupAsDirectory(t,!1)}watch(e){return new i.Disposable(()=>{})}_fireSoon(...e){this._bufferedEvents.push(...e),this._fireSoonHandle&&clearTimeout(this._fireSoonHandle),this._fireSoonHandle=setTimeout(()=>{this._emitter.fire(this._bufferedEvents),this._bufferedEvents.length=0},5)}_basename(e){return(e=this._rtrim(e,"/"))?e.substr(e.lastIndexOf("/")+1):""}_dirname(e){return(e=this._rtrim(e,"/"))?e.substr(0,e.lastIndexOf("/")):"/"}_rtrim(e,t){if(!e||!t)return e;const r=t.length,i=e.length;if(0===r||0===i)return e;let s=i,o=-1;for(;o=e.lastIndexOf(t,s-1),-1!==o&&o+r===s;){if(0===o)return"";s=o}return e.substring(0,s)}_getFiles(){const e=new Set;return this._doGetFiles(this.root,e),e}_doGetFiles(e,t){e.entries.forEach(e=>{e instanceof o?t.add(e):this._doGetFiles(e,t)})}_convertSimple2RegExpPattern(e){return e.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&").replace(/[\*]/g,".*")}provideFileSearchResults(e,t,r){return this._findFiles(e.pattern)}_findFiles(e){const t=this._getFiles(),r=[],i=e?new RegExp(this._convertSimple2RegExpPattern(e)):null;for(const e of t)i&&!i.exec(e.name)||r.push(e.uri);return r}provideTextSearchResults(e,t,r,s){const o=this._findFiles(t.includes[0]);if(o)for(const t of o){const s=this._textDecoder.decode(this.readFile(t)).split("\n");for(let o=0;o<s.length;o++){const n=s[o],a=n.indexOf(e.pattern);-1!==a&&r.report({uri:t,ranges:new i.Range(new i.Position(o,a),new i.Position(o,a+e.pattern.length)),preview:{text:n,matches:new i.Range(new i.Position(0,a),new i.Position(0,a+e.pattern.length))}})}}return{limitHit:!1}}}t.MemFS=l,l.scheme="memfs"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.gbkFile=t.windows1251File=t.getImageFile=t.debuggableFile=t.largeTSFile=void 0,t.largeTSFile="cons.bar.for",t.debuggableFile="# VS Code Mock Debug\n\nThis is a starter sample for developing VS Code debug adapters.\n\n**Mock Debug** simulates a debug adapter for Visual Studio Code.\nIt supports *step*, *continue*, *breakpoints*, *exceptions*, and\n*variable access* but it is not connected to any real debugger.\n\nThe sample is meant as an educational piece showing how to implement a debug\nadapter for VS Code. It can be used as a starting point for developing a real adapter.\n\nMore information about how to develop a new debug adapter can be found\n[here](https://code.visualstudio.com/docs/extensions/example-debuggers).\nOr discuss debug adapters on Gitter:\n[![Gitter Chat](https://img.shields.io/badge/chat-online-brightgreen.svg)](https://gitter.im/Microsoft/vscode)\n\n## Using Mock Debug\n\n* Install the **Mock Debug** extension in VS Code.\n* Create a new 'program' file 'readme.md' and enter several lines of arbitrary text.\n* Switch to the debug viewlet and press the gear dropdown.\n* Select the debug environment \"Mock Debug\".\n* Press the green 'play' button to start debugging.\n\nYou can now 'step through' the 'readme.md' file, set and hit breakpoints, and run into exceptions (if the word exception appears in a line).\n\n![Mock Debug](file.jpg)\n\n## Build and Run\n\n[![build status](https://travis-ci.org/Microsoft/vscode-mock-debug.svg?branch=master)](https://travis-ci.org/Microsoft/vscode-mock-debug)\n[![build status](https://ci.appveyor.com/api/projects/status/empmw5q1tk6h1fly/branch/master?svg=true)](https://ci.appveyor.com/project/weinand/vscode-mock-debug)\n\n\n* Clone the project [https://github.com/Microsoft/vscode-mock-debug.git](https://github.com/Microsoft/vscode-mock-debug.git)\n* Open the project folder in VS Code.\n* Press 'F5' to build and launch Mock Debug in another VS Code window. In that window:\n* Open a new workspace, create a new 'program' file 'readme.md' and enter several lines of arbitrary text.\n* Switch to the debug viewlet and press the gear dropdown.\n* Select the debug environment \"Mock Debug\".\n* Press 'F5' to start debugging.",t.getImageFile=function(){const e=atob("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");return Uint8Array.from([...e].map(e=>e.charCodeAt(0)))},t.windows1251File=Uint8Array.from([192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]),t.gbkFile=Uint8Array.from([214,208,185,250,97,98,99])}]));
//# sourceMappingURL=extension.js.map