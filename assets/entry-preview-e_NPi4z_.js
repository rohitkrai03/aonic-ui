import{R as o,r as i}from"./index-DogsOklH.js";import{u as p,r as d}from"./react-16-U_v_Dyq8.js";import"./index-MroJ3egt.js";const{global:u}=__STORYBOOK_MODULE_GLOBAL__;var{FRAMEWORK_OPTIONS:s}=u,x=(r,e)=>{let{id:n,component:t}=e;if(!t)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return o.createElement(t,{...r})},E=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:e}=this.props;r||e()}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:e}},c=s!=null&&s.strictMode?i.StrictMode:i.Fragment;async function _({storyContext:r,unboundStoryFn:e,showMain:n,showException:t,forceRemount:l},a){let m=o.createElement(E,{showMain:n,showException:t},o.createElement(e,{...r})),h=c?o.createElement(c,null,m):m;return l&&p(a),await d(h,a),()=>p(a)}var C={renderer:"react"};export{C as parameters,x as render,_ as renderToCanvas};
