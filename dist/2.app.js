(window.webpackJsonpReactFormBuilder=window.webpackJsonpReactFormBuilder||[]).push([[2],{388:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var l=a(8),n=a.n(l),r=a(9),o=a.n(r),s=a(10),i=a.n(s),c=a(14),m=a.n(c),p=a(11),h=a.n(p),u=a(0),d=a.n(u),E=a(387),b=a(251),v=a(385),f=a.n(v),y=a(386),N=a(22),g=a.n(N),k=a(81);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=h()(e);if(t){var n=h()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return m()(this,a)}}var O=function(e){i()(a,e);var t=w(a);function a(e){var l;return n()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1},l}return o()(a,[{key:"_setValue",value:function(e){return e.replace(/[^A-Z0-9]+/gi,"_").toLowerCase()}},{key:"editOption",value:function(e,t){var a=this.state.element,l=a.options[e].value!==this._setValue(a.options[e].text)?a.options[e].value:this._setValue(t.target.value);a.options[e].text=t.target.value,a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editValue",value:function(e,t){var a=this.state.element,l=""===t.target.value?this._setValue(a.options[e].text):t.target.value;a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editOptionCorrect",value:function(e,t){var a=this.state.element;a.options[e].hasOwnProperty("correct")?delete a.options[e].correct:a.options[e].correct=!0,this.setState({element:a}),this.props.updateElement.call(this.props.preview,a)}},{key:"updateOption",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"addOption",value:function(e){var t=this.state.element;t.options.splice(e+1,0,{value:"",text:"",key:g.a.uuid()}),this.props.updateElement.call(this.props.preview,t)}},{key:"removeOption",value:function(e){var t=this.state.element;t.options.splice(e,1),this.props.updateElement.call(this.props.preview,t)}},{key:"render",value:function(){var e=this;return this.state.dirty&&(this.state.element.dirty=!0),d.a.createElement("div",{className:"dynamic-option-list"},d.a.createElement("ul",null,d.a.createElement("li",null,d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("b",null,d.a.createElement(k.a,{id:"options"}))),this.props.canHaveOptionValue&&d.a.createElement("div",{className:"col-sm-2"},d.a.createElement("b",null,d.a.createElement(k.a,{id:"value"}))),this.props.canHaveOptionValue&&this.props.canHaveOptionCorrect&&d.a.createElement("div",{className:"col-sm-4"},d.a.createElement("b",null,d.a.createElement(k.a,{id:"correct"}))))),this.props.element.options.map((function(t,a){var l="edit_".concat(t.key),n=t.value!==e._setValue(t.text)?t.value:"";return d.a.createElement("li",{className:"clearfix",key:l},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("input",{tabIndex:a+1,className:"form-control",style:{width:"100%"},type:"text",name:"text_".concat(a),placeholder:"Option text",value:t.text,onBlur:e.updateOption.bind(e),onChange:e.editOption.bind(e,a)})),e.props.canHaveOptionValue&&d.a.createElement("div",{className:"col-sm-2"},d.a.createElement("input",{className:"form-control",type:"text",name:"value_".concat(a),value:n,onChange:e.editValue.bind(e,a)})),e.props.canHaveOptionValue&&e.props.canHaveOptionCorrect&&d.a.createElement("div",{className:"col-sm-1"},d.a.createElement("input",{className:"form-control",type:"checkbox",value:"1",onChange:e.editOptionCorrect.bind(e,a),checked:t.hasOwnProperty("correct")})),d.a.createElement("div",{className:"col-sm-3"},d.a.createElement("div",{className:"dynamic-options-actions-buttons"},d.a.createElement("button",{onClick:e.addOption.bind(e,a),className:"btn btn-success"},d.a.createElement("i",{className:"fas fa-plus-circle"})),a>0&&d.a.createElement("button",{onClick:e.removeOption.bind(e,a),className:"btn btn-danger"},d.a.createElement("i",{className:"fas fa-minus-circle"}))))))}))))}}]),a}(d.a.Component),P=a(64);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=h()(e);if(t){var n=h()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return m()(this,a)}}var C={options:["inline","list","textAlign","fontSize","link","history"],inline:{inDropdown:!1,className:void 0,options:["bold","italic","underline","superscript","subscript"]}},B=function(e){i()(a,e);var t=x(a);function a(e){var l;return n()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1},l}return o()(a,[{key:"toggleRequired",value:function(){}},{key:"editElementProp",value:function(e,t,a){var l=this,n=this.state.element;n[e]=a.target[t],this.setState({element:n,dirty:!0},(function(){"checked"===t&&l.updateElement()}))}},{key:"onEditorStateChange",value:function(e,t,a){var l=f()(Object(b.convertToRaw)(a.getCurrentContent())).replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/&nbsp;/g," ").replace(/(?:\r\n|\r|\n)/g," "),n=this.state.element;n[t]=l,this.setState({element:n,dirty:!0})}},{key:"updateElement",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"convertFromHTML",value:function(e){var t=Object(b.convertFromHTML)(e);if(!t.contentBlocks||!t.contentBlocks.length)return b.EditorState.createEmpty();var a=b.ContentState.createFromBlockArray(t);return b.EditorState.createWithContent(a)}},{key:"addOptions",value:function(){var e=this,t=document.getElementById("optionsApiUrl").value;t&&Object(P.a)(t).then((function(t){e.props.element.options=[];var a=e.props.element.options;t.forEach((function(e){e.key=g.a.uuid(),a.push(e)}));var l=e.state.element;e.setState({element:l,dirty:!0})}))}},{key:"render",value:function(){this.state.dirty&&(this.props.element.dirty=!0);var e,t=!!this.props.element.hasOwnProperty("required")&&this.props.element.required,a=!!this.props.element.hasOwnProperty("readOnly")&&this.props.element.readOnly,l=!!this.props.element.hasOwnProperty("defaultToday")&&this.props.element.defaultToday,n=!!this.props.element.hasOwnProperty("showTimeSelect")&&this.props.element.showTimeSelect,r=!!this.props.element.hasOwnProperty("showTimeSelectOnly")&&this.props.element.showTimeSelectOnly,o=!!this.props.element.hasOwnProperty("showTimeInput")&&this.props.element.showTimeInput,s=!!this.props.element.hasOwnProperty("inline")&&this.props.element.inline,i=!!this.props.element.hasOwnProperty("bold")&&this.props.element.bold,c=!!this.props.element.hasOwnProperty("italic")&&this.props.element.italic,m=!!this.props.element.hasOwnProperty("center")&&this.props.element.center,p=!!this.props.element.hasOwnProperty("pageBreakBefore")&&this.props.element.pageBreakBefore,h=!!this.props.element.hasOwnProperty("alternateForm")&&this.props.element.alternateForm,u=this.props.element,b=u.canHavePageBreakBefore,v=u.canHaveAlternateForm,f=u.canHaveDisplayHorizontal,N=u.canHaveOptionCorrect,g=u.canHaveOptionValue,w=this.props.files.length?this.props.files:[];return(w.length<1||w.length>0&&""!==w[0].id)&&w.unshift({id:"",file_name:""}),this.props.element.hasOwnProperty("content")&&(e=this.convertFromHTML(this.props.element.content)),this.props.element.hasOwnProperty("label")&&(e=this.convertFromHTML(this.props.element.label)),d.a.createElement("div",null,d.a.createElement("div",{className:"clearfix"},d.a.createElement("h4",{className:"float-left"},this.props.element.text),d.a.createElement("i",{className:"float-right fas fa-times dismiss-edit",onClick:this.props.manualEditModeOff})),this.props.element.hasOwnProperty("content")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label"},d.a.createElement(k.a,{id:"text-to-display"}),":"),d.a.createElement(y.Editor,{toolbar:C,defaultEditorState:e,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"content"),stripPastedStyles:!0})),this.props.element.hasOwnProperty("file_path")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label",htmlFor:"fileSelect"},d.a.createElement(k.a,{id:"choose-file"}),":"),d.a.createElement("select",{id:"fileSelect",className:"form-control",defaultValue:this.props.element.file_path,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"file_path","value")},w.map((function(e){var t="file_".concat(e.id);return d.a.createElement("option",{value:e.id,key:t},e.file_name)})))),this.props.element.hasOwnProperty("href")&&d.a.createElement("div",{className:"form-group"},d.a.createElement(E.a,{type:"text",className:"form-control",defaultValue:this.props.element.href,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"href","value")})),this.props.element.hasOwnProperty("src")&&d.a.createElement("div",null,d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label",htmlFor:"srcInput"},d.a.createElement(k.a,{id:"link-to"}),":"),d.a.createElement("input",{id:"srcInput",type:"text",className:"form-control",defaultValue:this.props.element.src,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"src","value")})),d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"do-center",className:"custom-control-input",type:"checkbox",checked:m,value:!0,onChange:this.editElementProp.bind(this,"center","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"do-center"},d.a.createElement(k.a,{id:"center"}),"?"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-3"},d.a.createElement("label",{className:"control-label",htmlFor:"elementWidth"},d.a.createElement(k.a,{id:"width"}),":"),d.a.createElement("input",{id:"elementWidth",type:"text",className:"form-control",defaultValue:this.props.element.width,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"width","value")})),d.a.createElement("div",{className:"col-sm-3"},d.a.createElement("label",{className:"control-label",htmlFor:"elementHeight"},d.a.createElement(k.a,{id:"height"}),":"),d.a.createElement("input",{id:"elementHeight",type:"text",className:"form-control",defaultValue:this.props.element.height,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"height","value")})))),this.props.element.hasOwnProperty("label")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",null,d.a.createElement(k.a,{id:"display-label"})),d.a.createElement(y.Editor,{toolbar:C,defaultEditorState:e,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"label"),stripPastedStyles:!0}),d.a.createElement("br",null),d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"is-required",className:"custom-control-input",type:"checkbox",checked:t,value:!0,onChange:this.editElementProp.bind(this,"required","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-required"},d.a.createElement(k.a,{id:"required"}))),this.props.element.hasOwnProperty("readOnly")&&d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"is-read-only",className:"custom-control-input",type:"checkbox",checked:a,value:!0,onChange:this.editElementProp.bind(this,"readOnly","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-read-only"},d.a.createElement(k.a,{id:"read-only"}))),this.props.element.hasOwnProperty("defaultToday")&&d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"is-default-to-today",className:"custom-control-input",type:"checkbox",checked:l,value:!0,onChange:this.editElementProp.bind(this,"defaultToday","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"is-default-to-today"},d.a.createElement(k.a,{id:"default-to-today"}),"?")),this.props.element.hasOwnProperty("showTimeSelect")&&d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"show-time-select",className:"custom-control-input",type:"checkbox",checked:n,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelect","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select"},d.a.createElement(k.a,{id:"show-time-select"}),"?")),n&&this.props.element.hasOwnProperty("showTimeSelectOnly")&&d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"show-time-select-only",className:"custom-control-input",type:"checkbox",checked:r,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelectOnly","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select-only"},d.a.createElement(k.a,{id:"show-time-select-only"}),"?")),this.props.element.hasOwnProperty("showTimeInput")&&d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"show-time-input",className:"custom-control-input",type:"checkbox",checked:o,value:!0,onChange:this.editElementProp.bind(this,"showTimeInput","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-input"},d.a.createElement(k.a,{id:"show-time-input"}),"?")),("RadioButtons"===this.state.element.element||"Checkboxes"===this.state.element.element)&&f&&d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"display-horizontal",className:"custom-control-input",type:"checkbox",checked:s,value:!0,onChange:this.editElementProp.bind(this,"inline","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"display-horizontal"},d.a.createElement(k.a,{id:"display-horizontal"})))),"Signature"===this.state.element.element&&this.props.element.readOnly?d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label",htmlFor:"variableKey"},d.a.createElement(k.a,{id:"variable-key"}),":"),d.a.createElement("input",{id:"variableKey",type:"text",className:"form-control",defaultValue:this.props.element.variableKey,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"variableKey","value")}),d.a.createElement("p",{className:"help-block"},d.a.createElement(k.a,{id:"variable-key-desc"}),".")):d.a.createElement("div",null),b&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label"},d.a.createElement(k.a,{id:"print-options"})),d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"page-break-before-element",className:"custom-control-input",type:"checkbox",checked:p,value:!0,onChange:this.editElementProp.bind(this,"pageBreakBefore","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"page-break-before-element"},d.a.createElement(k.a,{id:"page-break-before-elements"}),"?"))),v&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label"},d.a.createElement(k.a,{id:"alternate-signature-page"})),d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"display-on-alternate",className:"custom-control-input",type:"checkbox",checked:h,value:!0,onChange:this.editElementProp.bind(this,"alternateForm","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"display-on-alternate"},d.a.createElement(k.a,{id:"display-on-alternate-signature-page"}),"?"))),this.props.element.hasOwnProperty("step")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-group-range"},d.a.createElement("label",{className:"control-label",htmlFor:"rangeStep"},d.a.createElement(k.a,{id:"step"})),d.a.createElement("input",{id:"rangeStep",type:"number",className:"form-control",defaultValue:this.props.element.step,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"step","value")}))),this.props.element.hasOwnProperty("min_value")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-group-range"},d.a.createElement("label",{className:"control-label",htmlFor:"rangeMin"},d.a.createElement(k.a,{id:"min"})),d.a.createElement("input",{id:"rangeMin",type:"number",className:"form-control",defaultValue:this.props.element.min_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_value","value")}),d.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.min_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_label","value")}))),this.props.element.hasOwnProperty("max_value")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-group-range"},d.a.createElement("label",{className:"control-label",htmlFor:"rangeMax"},d.a.createElement(k.a,{id:"max"})),d.a.createElement("input",{id:"rangeMax",type:"number",className:"form-control",defaultValue:this.props.element.max_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_value","value")}),d.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.max_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_label","value")}))),this.props.element.hasOwnProperty("default_value")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"form-group-range"},d.a.createElement("label",{className:"control-label",htmlFor:"defaultSelected"},d.a.createElement(k.a,{id:"default-selected"})),d.a.createElement("input",{id:"defaultSelected",type:"number",className:"form-control",defaultValue:this.props.element.default_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"default_value","value")}))),this.props.element.hasOwnProperty("static")&&this.props.element.static&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label"},d.a.createElement(k.a,{id:"text-style"})),d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"do-bold",className:"custom-control-input",type:"checkbox",checked:i,value:!0,onChange:this.editElementProp.bind(this,"bold","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"do-bold"},d.a.createElement(k.a,{id:"bold"}))),d.a.createElement("div",{className:"custom-control custom-checkbox"},d.a.createElement("input",{id:"do-italic",className:"custom-control-input",type:"checkbox",checked:c,value:!0,onChange:this.editElementProp.bind(this,"italic","checked")}),d.a.createElement("label",{className:"custom-control-label",htmlFor:"do-italic"},d.a.createElement(k.a,{id:"italic"})))),this.props.element.showDescription&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label",htmlFor:"questionDescription"},d.a.createElement(k.a,{id:"description"})),d.a.createElement(E.a,{type:"text",className:"form-control",id:"questionDescription",defaultValue:this.props.element.description,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"description","value")})),this.props.showCorrectColumn&&this.props.element.canHaveAnswer&&!this.props.element.hasOwnProperty("options")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label",htmlFor:"correctAnswer"},d.a.createElement(k.a,{id:"correct-answer"})),d.a.createElement("input",{id:"correctAnswer",type:"text",className:"form-control",defaultValue:this.props.element.correct,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"correct","value")})),this.props.element.canPopulateFromApi&&this.props.element.hasOwnProperty("options")&&d.a.createElement("div",{className:"form-group"},d.a.createElement("label",{className:"control-label",htmlFor:"optionsApiUrl"},d.a.createElement(k.a,{id:"populate-options-from-api"})),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("input",{className:"form-control",style:{width:"100%"},type:"text",id:"optionsApiUrl",placeholder:"http://localhost:8080/api/optionsdata"})),d.a.createElement("div",{className:"col-sm-6"},d.a.createElement("button",{onClick:this.addOptions.bind(this),className:"btn btn-success"},d.a.createElement(k.a,{id:"populate"}))))),this.props.element.hasOwnProperty("options")&&d.a.createElement(O,{showCorrectColumn:this.props.showCorrectColumn,canHaveOptionCorrect:N,canHaveOptionValue:g,data:this.props.preview.state.data,updateElement:this.props.updateElement,preview:this.props.preview,element:this.props.element,key:this.props.element.options.length}))}}]),a}(d.a.Component);B.defaultProps={className:"edit-element-fields"}}}]);