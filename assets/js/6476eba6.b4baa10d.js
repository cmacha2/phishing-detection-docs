"use strict";(self.webpackChunkphishing_detection_docs=self.webpackChunkphishing_detection_docs||[]).push([[722],{6187:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"usage","title":"Usage Guide","description":"Detect Phishing URLs","source":"@site/docs/usage.md","sourceDirName":".","slug":"/usage","permalink":"/phishing-detection-docs/docs/usage","draft":false,"unlisted":false,"editUrl":"https://github.com/cmacha2/phishing-detection-docs/tree/main/docs/docs/usage.md","tags":[],"version":"current","lastUpdatedBy":"cmacha2","lastUpdatedAt":1733070549000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Installation Guide","permalink":"/phishing-detection-docs/docs/installation"},"next":{"title":"API Reference","permalink":"/phishing-detection-docs/docs/api-reference"}}');var s=i(4848),c=i(8453);const r={},o="Usage Guide",l={},h=[{value:"Detect Phishing URLs",id:"detect-phishing-urls",level:2},{value:"Example:",id:"example",level:3},{value:"Detect Phishing Emails",id:"detect-phishing-emails",level:2},{value:"Example:",id:"example-1",level:3},{value:"Batch Processing",id:"batch-processing",level:2},{value:"Example:",id:"example-2",level:3},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Using Custom Configurations",id:"using-custom-configurations",level:3},{value:"Interpreting Results",id:"interpreting-results",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usage-guide",children:"Usage Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"detect-phishing-urls",children:"Detect Phishing URLs"}),"\n",(0,s.jsxs)(n.p,{children:["Quickly identify phishing attempts in URLs using the ",(0,s.jsx)(n.code,{children:"PhishingDetector"})," class."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from phishing_detection_py import PhishingDetector\n\ndetector = PhishingDetector(model_type="url")\nresult = detector.predict("http://example-phishing-site.com")\nprint(result)\n'})}),"\n",(0,s.jsx)(n.p,{children:"This code will output the detection result, such as whether the URL is a phishing attempt and the confidence score."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"detect-phishing-emails",children:"Detect Phishing Emails"}),"\n",(0,s.jsx)(n.p,{children:"Analyze email content for phishing indicators."}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from phishing_detection_py import PhishingDetector\n\ndetector = PhishingDetector(model_type="email")\nresult = detector.predict("Urgent: Your account is locked. Click here to unlock it.")\nprint(result)\n'})}),"\n",(0,s.jsx)(n.p,{children:"This code evaluates the email text and provides phishing detection results."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"batch-processing",children:"Batch Processing"}),"\n",(0,s.jsxs)(n.p,{children:["You can process multiple URLs or emails at once using the ",(0,s.jsx)(n.code,{children:"BatchProcessor"})," class."]}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from phishing_detection_py.batch_processor import BatchProcessor\n\ninputs = ["http://phishing-url.com", "https://safe-url.org"]\nbatch_processor = BatchProcessor(model_type="url")\nresults = batch_processor.process(inputs)\nprint(results)\n'})}),"\n",(0,s.jsx)(n.p,{children:"This approach is ideal for handling large datasets efficiently."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,s.jsx)(n.p,{children:"Customize your detection workflow or configurations."}),"\n",(0,s.jsx)(n.h3,{id:"using-custom-configurations",children:"Using Custom Configurations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from phishing_detection_py.utils import load_config\n\nconfig = load_config("path/to/config.yaml")\nprint(config)\n'})}),"\n",(0,s.jsx)(n.p,{children:"This allows you to load and apply custom configurations for your detection process."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"interpreting-results",children:"Interpreting Results"}),"\n",(0,s.jsx)(n.p,{children:"The output of detection methods includes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Labels"}),": ",(0,s.jsx)(n.code,{children:"phishing"})," or ",(0,s.jsx)(n.code,{children:"legitimate"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Confidence Scores"}),": A numerical value indicating the model's certainty."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'[\n    {"input": "http://phishing-url.com", "label": "phishing", "confidence": 0.98},\n    {"input": "https://safe-url.org", "label": "legitimate", "confidence": 0.95}\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);