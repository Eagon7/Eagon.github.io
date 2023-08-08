import{_ as e,o as n,c as o,x as t}from"./chunks/framework.c6ee4a63.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/BackEnd/NestJs/Basic/link/Execution Context 执行上下文.md","lastUpdated":null}'),s={name:"articles/BackEnd/NestJs/Basic/link/Execution Context 执行上下文.md"},c=t("blockquote",null,[t("p",null,"他代表了一个HTTP请求的执行上下文，提供了许多属性和方法，可用于在请求的生命周期内访问")],-1),a=t("blockquote",null,[t("p",null,"ExecutionContext是在每个请求到达控制器之前被Nestjs封装产生的，他的请求是将请求的上下文，传递给控制器，拦截器，管道，守卫等各个部分。以便他们可以对请求进行处理和转换 当一个请求到达应用程序时，Nestjs框架会将他封装成一个ExecutionContext对象，这个对象包含了当前请求的上下文信息，包括请求头，请求体，查询参数，响应对象等。ExecutionContext只在当前请求有效，不可以和其他请求共享")],-1),l=[c,a];function i(_,r,u,d,x,p){return n(),o("div",null,l)}const m=e(s,[["render",i]]);export{k as __pageData,m as default};
