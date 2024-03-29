import {
    a as _decorate,
    s,
    e,
    x,
    _ as _taggedTemplateLiteral,
    d as e$1,
    f as _inherits,
    g as _createSuper,
    h as _createClass,
    i as _classCallCheck,
    j as _assertThisInitialized
} from "./query-assigned-elements-0bb34a8a.js";
var _templateObject, config = {
        controlName: "JS Insert",
        groupName: "JS Insert",
        fallbackDisableSubmit: !1,
        description: "Execute JS on Form",
        version: "1.0",
        properties: {
            jsCode: {
                type: "string",
                title: "JS to Execute",
                description: "Ask for examples",
                maxLength: 4096
            },
            loadjQuery: {
                type: "boolean",
                title: "Load jQuery",
                description: "Automatically add jQuery 3.7.1",
                defaultValue: "true"
            }
        },
        events: ["ntx-value-change"],
        standardProperties: {
            fieldLabel: !0,
            description: !1,
            defaultValue: !1,
            readOnly: !1,
            visibility: !0
        }
    },
    styles = [],
    defaultEventArgs = function(e) {
        return {
            bubbles: !0,
            cancelable: !1,
            composed: !0,
            detail: e
        }
    },
    PageHighlight = _decorate([e$1("js-insert")], function(i, t) {
        return {
            F: function() {
                _inherits(s, t);
                var r = _createSuper(s);

                function s() {
                    var e;
                    _classCallCheck(this, s);
                    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                    return e = r.call.apply(r, [this].concat(a)), i(_assertThisInitialized(e)), e
                }
                return _createClass(s)
            }(),
            d: [{
                kind: "field",
                static: !0,
                key: "getMetaConfig",
                value: function() {
                    return function() {
                        return config
                    }
                }
            }, {
                kind: "field",
                static: !0,
                key: "styles",
                value: function() {
                    return styles
                }
            }, {
                kind: "field",
                decorators: [e({
                    type: String
                })],
                key: "jsCode",
                value: function() {
                    return ""
                }
            }, {
                kind: "field",
                decorators: [e({
                    type: Boolean
                })],
                key: "loadjQuery",
                value: function() {
                    return !0
                }
            }, {
                kind: "method",
                key: "render",
                value: function() {
                    var e = document.createElement("script"),
                        t = document.createElement("script"),
                        a = this.jsCode;
                    return this.loadjQuery ? (e.src = "https://code.jquery.com/jquery-3.7.1.min.js", e.crossOrigin = "anonymous", e.integrity = "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=", console.log("Loading jQuery"), e.onload = function() {
                        console.log("jQuery loaded successfully.");
                        var e = document.createElement("script");
                        e.textContent = a, document.body.appendChild(e)
                    }, document.body.appendChild(e)) : (t.textContent = this.jsCode, document.body.appendChild(t)), x(_templateObject = _templateObject || _taggedTemplateLiteral(['\n            <p style="font-family: monospace">\n                ', "\n            </p>\n        "]), this.jsCode)
                }
            }]
        }
    }, s);
export {
    PageHighlight,
    defaultEventArgs
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMtaW5zZXJ0LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9qcy1pbnNlcnQvanMtaW5zZXJ0LmNvbmZpZy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2pzLWluc2VydC9qcy1pbnNlcnQuc3R5bGVzLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvanMtaW5zZXJ0L2pzLWluc2VydC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIFBsdWdpbkNvbnRyYWN0IH0gZnJvbSAnQG5pbnRleC9mb3JtLXBsdWdpbi1jb250cmFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWc6IFBsdWdpbkNvbnRyYWN0ID0ge1xyXG5cdGNvbnRyb2xOYW1lOiAnX19wbHVnaW5Db250cm9sTmFtZV9fJyxcclxuXHRncm91cE5hbWU6ICdfX3BsdWdpbkdyb3VwTmFtZV9fJyxcclxuXHRmYWxsYmFja0Rpc2FibGVTdWJtaXQ6IGZhbHNlLFxyXG5cdGRlc2NyaXB0aW9uOiAnRXhlY3V0ZSBKUyBvbiBGb3JtJyxcclxuXHR2ZXJzaW9uOiAnMS4wJyxcclxuXHRwcm9wZXJ0aWVzOiB7ICBcclxuICAgICAgICBqc0NvZGU6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnSlMgdG8gRXhlY3V0ZScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAnQXNrIGZvciBleGFtcGxlcycsXHJcblx0XHRcdG1heExlbmd0aDogNDA5NlxyXG4gICAgICAgIH0sXHJcblx0XHRsb2FkalF1ZXJ5OiB7XHJcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcclxuXHRcdFx0dGl0bGU6ICdMb2FkIGpRdWVyeScsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiAnQXV0b21hdGljYWxseSBhZGQgalF1ZXJ5IDMuNy4xJyxcclxuXHRcdFx0ZGVmYXVsdFZhbHVlOiAndHJ1ZSdcclxuXHRcdH1cclxuXHR9LFx0XHJcblx0ZXZlbnRzOiBbXCJudHgtdmFsdWUtY2hhbmdlXCJdLCBcclxuXHRzdGFuZGFyZFByb3BlcnRpZXM6IHtcclxuXHRcdGZpZWxkTGFiZWw6IHRydWUsXHJcblx0XHRkZXNjcmlwdGlvbjogZmFsc2UsXHJcblx0XHRkZWZhdWx0VmFsdWU6IGZhbHNlLFxyXG5cdFx0cmVhZE9ubHk6IGZhbHNlLFxyXG5cdFx0dmlzaWJpbGl0eTogdHJ1ZVxyXG5cdH0sXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHN0eWxlcyA9IFtdIiwiaW1wb3J0IHsgdHlwZSBQbHVnaW5Db250cmFjdCB9IGZyb20gJ0BuaW50ZXgvZm9ybS1wbHVnaW4tY29udHJhY3QnXHJcbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9qcy1pbnNlcnQuY29uZmlnJztcclxuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnLi9qcy1pbnNlcnQuc3R5bGVzJztcclxuXHJcbmV4cG9ydCB0eXBlIEV2ZW50RGF0YTxUPiA9IHtcclxuICAgIGJ1YmJsZXM/OiBib29sZWFuO1xyXG4gICAgY2FuY2VsYWJsZT86IGJvb2xlYW47XHJcbiAgICBjb21wb3NlZD86IGJvb2xlYW47XHJcbiAgICBkZXRhaWw/OiBUO1xyXG59XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0RXZlbnRBcmdzID0gPFQ+KGFyZ3M6IFQpOiBFdmVudERhdGE8VD4gPT4gKHtcclxuICAgIGJ1YmJsZXM6IHRydWUsXHJcbiAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgIGNvbXBvc2VkOiB0cnVlLFxyXG4gICAgZGV0YWlsOiBhcmdzXHJcbn0pXHJcblxyXG5AY3VzdG9tRWxlbWVudCgncGx1Z2luLWVsZW1lbnRuYW1lJylcclxuZXhwb3J0IGNsYXNzIFBhZ2VIaWdobGlnaHQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuICAgIHN0YXRpYyBnZXRNZXRhQ29uZmlnID0gKCk6IFByb21pc2U8UGx1Z2luQ29udHJhY3Q+IHwgUGx1Z2luQ29udHJhY3QgPT4gY29uZmlnO1xyXG4gICAgc3RhdGljIG92ZXJyaWRlIHN0eWxlcyA9IHN0eWxlc1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZ30pXHJcbiAgICBqc0NvZGU6IHN0cmluZyA9IFwiXCJcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbn0pXHJcbiAgICBsb2FkalF1ZXJ5OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBvdmVycmlkZSByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IGpxVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgY29uc3QganMgPSB0aGlzLmpzQ29kZTtcclxuICAgICAgICBpZih0aGlzLmxvYWRqUXVlcnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBqcVRhZy5zcmMgPSAnaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNy4xLm1pbi5qcyc7XHJcbiAgICAgICAgICAgIGpxVGFnLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICAgICAgICAgIGpxVGFnLmludGVncml0eSA9IFwic2hhMjU2LS9KcVQzU1FmYXdSY3YvQklIUFRoa0J2czBPRXZ0RkZtcVBGL2xZSS9DeG89XCJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgalF1ZXJ5Jyk7XHJcblxyXG4gICAgICAgICAgICBqcVRhZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnalF1ZXJ5IGxvYWRlZCBzdWNjZXNzZnVsbHkuJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICAgICAgICAgIGN1c3RvbVNjcmlwdC50ZXh0Q29udGVudCA9IGpzO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjdXN0b21TY3JpcHQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChqcVRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzY3JpcHQudGV4dENvbnRlbnQgPSB0aGlzLmpzQ29kZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9vdXRwdXQganMgdG8gY29udHJvbCBmb3IgdmlzYmlsaXR5XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZVwiPlxyXG4gICAgICAgICAgICAgICAgJHt0aGlzLmpzQ29kZX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIGBcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250cm9sTmFtZSIsImdyb3VwTmFtZSIsImZhbGxiYWNrRGlzYWJsZVN1Ym1pdCIsImRlc2NyaXB0aW9uIiwidmVyc2lvbiIsInByb3BlcnRpZXMiLCJqc0NvZGUiLCJ0eXBlIiwidGl0bGUiLCJtYXhMZW5ndGgiLCJsb2FkalF1ZXJ5IiwiZGVmYXVsdFZhbHVlIiwiZXZlbnRzIiwic3RhbmRhcmRQcm9wZXJ0aWVzIiwiZmllbGRMYWJlbCIsInJlYWRPbmx5IiwidmlzaWJpbGl0eSIsInN0eWxlcyIsImRlZmF1bHRFdmVudEFyZ3MiLCJhcmdzIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjb21wb3NlZCIsImRldGFpbCIsIlBhZ2VIaWdobGlnaHQiLCJfZGVjb3JhdGUiLCJjdXN0b21FbGVtZW50IiwiX2luaXRpYWxpemUiLCJfTGl0RWxlbWVudCIsIkYiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiYXBwbHkiLCJ0aGlzIiwiY29uY2F0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9jcmVhdGVDbGFzcyIsImQiLCJraW5kIiwic3RhdGljIiwia2V5IiwidmFsdWUiLCJkZWNvcmF0b3JzIiwicHJvcGVydHkiLCJTdHJpbmciLCJCb29sZWFuIiwianFUYWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzY3JpcHQiLCJqcyIsInNyYyIsImNyb3NzT3JpZ2luIiwiaW50ZWdyaXR5IiwiY29uc29sZSIsImxvZyIsIm9ubG9hZCIsImN1c3RvbVNjcmlwdCIsInRleHRDb250ZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiaHRtbCIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJMaXRFbGVtZW50Il0sIm1hcHBpbmdzIjoiaU5BRU8sb0JBQU1BLE9BQXlCLENBQ3JDQyxZQUFhLFlBQ2JDLFVBQVcsa0JBQ1hDLHNCQUF1QixDQUFBLEVBQ3ZCQyxZQUFhLHFCQUNiQyxRQUFTLE1BQ1RDLFdBQVksQ0FDTEMsT0FBUSxDQUNKQyxLQUFNLFNBQ05DLE1BQU8sZ0JBQ2hCTCxZQUFhLG1CQUNiTSxVQUFXLElBQ0wsRUFDUEMsV0FBWSxDQUNYSCxLQUFNLFVBQ05DLE1BQU8sY0FDUEwsWUFBYSxpQ0FDYlEsYUFBYyxNQUNmLENBQ0EsRUFDREMsT0FBUSxDQUFDLG9CQUNUQyxtQkFBb0IsQ0FDbkJDLFdBQVksQ0FBQSxFQUNaWCxZQUFhLENBQUEsRUFDYlEsYUFBYyxDQUFBLEVBQ2RJLFNBQVUsQ0FBQSxFQUNWQyxXQUFZLENBQUEsQ0FDYixDQUNELEVDOUJhQyxPQUFTLEdDWVRDLGlCQUFtQixTQUFJQyxHQUFPLE1BQW9CLENBQzNEQyxRQUFTLENBQUEsRUFDVEMsV0FBWSxDQUFBLEVBQ1pDLFNBQVUsQ0FBQSxFQUNWQyxPQUFRSixFQUNYLEVBR1lLLGNBQWFDLFVBRHpCQyxDQUFBQSxJQUFjLFdBQW9CLEdBQUMsU0FBQUMsRUFBQUMsR0FDVixNQUFBLENBQUFDLGFBQUFDLFVBQUFOLEVBQUFJLENBQUEsRUFBQSxJQUFBRyxFQUFBQyxhQUFBUixDQUFBLEVBQUEsU0FBQUEsSUFBQSxJQUFBUyxFQUFBQyxxQkFBQVYsQ0FBQSxFQUFBLElBQUEsSUFBQVcsRUFBQUMsVUFBQUMsT0FBQWxCLEVBQUFtQixJQUFBQSxNQUFBSCxDQUFBLEVBQUFJLEVBQUEsRUFBQUEsRUFBQUosRUFBQUksQ0FBQSxHQUFBcEIsRUFBQW9CLEdBQUFILFVBQUFHLEdBQUEsT0FBQU4sRUFBQUYsRUFBQVMsS0FBQUMsTUFBQVYsRUFBQSxDQUFBVyxNQUFBQyxPQUFBeEIsQ0FBQSxDQUFBLEVBQUFRLEVBQUFpQix1QkFBQVgsQ0FBQSxDQUFBLEVBQUFBLENBQUEsQ0FBQSxPQUFBWSxhQUFBckIsQ0FBQSxDQUFBLEVBQUEsRUFBQXNCLEVBQUEsQ0FBQSxDQUFBQyxLQUFBLFFBQUFDLE9BQUEsQ0FBQSxFQUFBQyxJQUFBLGdCQUFBQyxpQkFBQSxPQUNDLFdBQUEsT0FBZ0RuRCxNQUFNLENBQUEsQ0FBQSxFQUFBLENBQUFnRCxLQUFBLFFBQUFDLE9BQUEsQ0FBQSxFQUFBQyxJQUFBLFNBQUFDLGlCQUFBLE9BQ3BEakMsTUFBTSxDQUFBLEVBQUEsQ0FBQThCLEtBQUEsUUFBQUksV0FBQSxDQUU5QkMsRUFBUyxDQUFFN0MsS0FBTThDLE1BQU0sQ0FBQyxHQUFDSixJQUFBLFNBQUFDLGlCQUFBLE1BQ1QsRUFBRSxDQUFBLEVBQUEsQ0FBQUgsS0FBQSxRQUFBSSxXQUFBLENBRWxCQyxFQUFTLENBQUU3QyxLQUFNK0MsT0FBTyxDQUFDLEdBQUNMLElBQUEsYUFBQUMsaUJBQUEsTUFDTCxDQUFBLENBQUksQ0FBQSxFQUFBLENBQUFILEtBQUEsU0FBQUUsSUFBQSxTQUFBQyxNQUUxQixXQUNJLElBQU1LLEVBQVFDLFNBQVNDLGNBQWMsUUFBUSxFQUN2Q0MsRUFBU0YsU0FBU0MsY0FBYyxRQUFRLEVBQ3hDRSxFQUFLakIsS0FBS3BDLE9BdUJoQixPQXRCR29DLEtBQUtoQyxZQUVKNkMsRUFBTUssSUFBTSw4Q0FDWkwsRUFBTU0sWUFBYyxZQUNwQk4sRUFBTU8sVUFBWSxzREFDbEJDLFFBQVFDLElBQUksZ0JBQWdCLEVBRTVCVCxFQUFNVSxPQUFTLFdBQ1hGLFFBQVFDLElBQUksNkJBQTZCLEVBQ3pDLElBQU1FLEVBQWVWLFNBQVNDLGNBQWMsUUFBUSxFQUNwRFMsRUFBYUMsWUFBY1IsRUFDM0JILFNBQVNZLEtBQUtDLFlBQVlILENBQVksR0FHMUNWLFNBQVNZLEtBQUtDLFlBQVlkLENBQUssSUFHL0JHLEVBQU9TLFlBQWN6QixLQUFLcEMsT0FDMUJrRCxTQUFTWSxLQUFLQyxZQUFZWCxDQUFNLEdBSTdCWSxFQUFJQyxnQkFBQUEsaUJBQUFDLHVCQUFBLENBQUEscUVBQUEsK0JBQUEsRUFFRDlCLEtBQUtwQyxNQUFNLENBR3pCLENBQUMsRUFBQSxDQUFBLEVBekM4Qm1FLENBQVUifQ==
