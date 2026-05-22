import{Ka as n,La as t,Ma as i,Ua as e,ua as r}from"./chunk-GZ7UTLGB.js";var l=(()=>{class o{static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275cmp=r({type:o,selectors:[["me-prod"]],decls:106,vars:0,consts:[[1,"lead"],[1,"summary"],[1,"label"],[1,"vision"],[1,"vision-lead"],[1,"scenarios"],[1,"scenario"],[1,"scenario-label"],[1,"thesis-cards"],[1,"thesis-card"],[1,"timeline"],[1,"entry"],[1,"year"],[1,"self-ref"],[1,"easter-egg"]],template:function(a,d){a&1&&(n(0,"h1"),e(1,"prod/"),t(),n(2,"p",0),e(3,` Selected shipped systems. The theme is not a job title; it is a pattern: make large engineering groups feel smaller, faster, and more honest.
`),t(),n(4,"section",1)(5,"div")(6,"span",2),e(7,"Core medium"),t(),n(8,"strong"),e(9,"monorepos + build systems"),t()(),n(10,"div")(11,"span",2),e(12,"Current frontier"),t(),n(13,"strong"),e(14,"AI-native developer workflows"),t()(),n(15,"div")(16,"span",2),e(17,"Operating style"),t(),n(18,"strong"),e(19,"measure, automate, standardize"),t()()(),n(20,"section",3)(21,"h2"),e(22,"The one-app thesis"),t(),n(23,"p",4),e(24," People cycle through a dozen apps to get work done: an editor to code, a mail client to triage, a messaging app to coordinate. Each app owns a protocol and wraps it in bespoke chrome. The user's job is to learn each app's chrome, context-switch between them, and mentally stitch the results together. "),t(),n(25,"p"),e(26," An AI agent that can operate protocols directly \u2014 SSH for code, IMAP for email, proprietary APIs for messaging \u2014 collapses these apps into one surface. The user never navigates to a \u201Ccode mode\u201D or an \u201Cemail mode.\u201D They describe what they want; the agent picks the protocol. One app, one composer, every protocol the user needs. "),t(),n(27,"div",5)(28,"div",6)(29,"span",7),e(30,"Coding"),t(),n(31,"p"),e(32," Filesystem, terminal, containers, remote SSH. The agent reads code, runs commands, writes patches, and operates across local and remote machines \u2014 without the IDE constraint. "),t()(),n(33,"div",6)(34,"span",7),e(35,"Messaging"),t(),n(36,"p"),e(37," Conversations surfaced through protocol integration. The agent reads threads, drafts replies, and sends messages from the same surface where you also write code and handle email. "),t()(),n(38,"div",6)(39,"span",7),e(40,"Email"),t(),n(41,"p"),e(42," IMAP inbox, drafts, attachments. The agent watches for new mail, reads messages, drafts replies for approval, and sends on confirmation. Email becomes another protocol the agent speaks. "),t()()(),n(43,"div",8)(44,"div",9)(45,"h3"),e(46,"Protocol integration as moat"),t(),n(47,"p"),e(48," Each scenario requires deep protocol work. Open protocols come first. Documented-but-gated APIs come next. Undocumented protocols are the hardest and highest-value \u2014 the cost is real and non-trivial, but it is one-time per protocol and creates lock-in that competitors cannot shortcut. "),t()(),n(49,"div",9)(50,"h3"),e(51,"Scalability thesis"),t(),n(52,"p"),e(53," Today, extreme engineering efficiency \u2014 single binary, proto-driven codegen, hermetic builds, one-person full-stack \u2014 keeps the per-scenario cost survivable. In the AGI era, protocol reverse engineering itself becomes agent-automatable. The architecture is designed as the substrate for that transition: the marginal cost of adding a new scenario approaches zero. "),t()()()(),n(54,"section",10)(55,"div",11)(56,"span",12),e(57,"2025-now"),t(),n(58,"h2"),e(59,"AI startup (ex-Googler founded) \u2014 AI Infrastructure & Data"),t(),n(60,"p"),e(61," 539.8K lines of agent edits in the recent 30 days, 19.3K agent messages, 26.7B tokens and $21.9K model cost in 6 months \u2014 tracked, not estimated. Shipped a cloud SaaS in two weeks, built coder data pipelines that doubled benchmark scores, and ran a 961TB crawl across 190M GitHub repositories with cost as a first-class KPI. "),t()(),n(62,"div",11)(63,"span",12),e(64,"2024-2025"),t(),n(65,"h2"),e(66,"Large AI lab \u2014 Monorepo, Codespace & Inference"),t(),n(67,"p"),e(68," Established a monorepo for about 200 developers, built containerized Codespace workflows, model management, decentralized P2P delivery, and a vLLM-class inference stack with continuous batching, OpenAI-compatible auth, mirroring, failover, and zero incidents after rollout. "),t()(),n(69,"div",11)(70,"span",12),e(71,"2023"),t(),n(72,"h2"),e(73,"Consumer electronics company \u2014 Monorepo & AI Developer Tools"),t(),n(74,"p"),e(75," Merged roughly 100 repositories into a monorepo in six weeks, introduced full-source builds, sanitizers, fuzzing, and an AKS Bazel RBE farm that cut build time by 80% at about $150/day. Built an in-house AI coding extension before agentic IDEs became normal. "),t()(),n(76,"div",11)(77,"span",12),e(78,"2021-2023"),t(),n(79,"h2"),e(80,"Large internet platform \u2014 Developer Productivity & Monorepo"),t(),n(81,"p"),e(82," Led monorepo infrastructure for Go, C/C++, and Java: ownership checks, large-scale change tooling, third-party dependency Bazelization, hermetic clang toolchains, and dev/CI/runtime container images adopted by 90%+ of the platform group. "),t()(),n(83,"div",11)(84,"span",12),e(85,"2020-2021"),t(),n(86,"h2"),e(87,"Telecom R&D \u2014 Bazel Migration & Engineering Standards"),t(),n(88,"p"),e(89," Converted a 3M-line codebase to Bazel in three weeks with a 20-engineer team, influenced a product-line migration away from CMake, served on language committees, and managed 200 servers with 0.25 FTE through Bazel-Ansible automation. "),t()(),n(90,"div",11)(91,"span",12),e(92,"2015-2020"),t(),n(93,"h2"),e(94,"Earlier \u2014 Product, SRE, Data & Input Methods"),t(),n(95,"p"),e(96," Co-founded an engineering company, built open-source Bazel TypeScript Protobuf/gRPC rules, scaled Redis to 3M req/s, automated bare-metal cluster bringup from one month to one day, modified DPDK drivers, and shipped Japanese input-engine work with Viterbi and LOUDS tries. "),t()()(),n(97,"section",13)(98,"h2"),e(99,"gono"),t(),n(100,"p"),e(101," This site is built from the same kind of system it argues for: a real Bazel monorepo where product, design language, resume, essays, and infrastructure live in one graph. You are looking at one of its prod/ targets right now. "),t()(),n(102,"p",14),e(103," // base/builder/README.md"),i(104,"br"),e(105,`Status: removed. System: retained. All prod/ targets depend on this.
`),t())},styles:[`h1[_ngcontent-%COMP%] {
    font-size: var(--fs-title1);
    font-weight: 600;
    color: var(--text-brand);
    margin-bottom: var(--sp-lg);
}

.lead[_ngcontent-%COMP%] {
    font-size: var(--fs-headline);
    color: var(--text-secondary);
    margin-bottom: var(--sp-xl);
    max-width: 760px;
}

.summary[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sp-md);
    margin-bottom: var(--sp-xl);
}

.summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {
    border: 1px solid var(--surface-border);
    background: var(--surface-primary);
    padding: var(--sp-md);
}

.summary[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {
    display: block;
    font-size: var(--fs-micro);
    color: var(--text-tertiary);
    margin-bottom: var(--sp-xxs);
}

.summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
    display: block;
    font-size: var(--fs-caption);
    color: var(--text-primary);
    font-weight: 600;
}

.vision[_ngcontent-%COMP%] {
    margin-bottom: var(--sp-xl);
    padding: var(--sp-lg);
    border: 1px solid var(--brand-primary);
    background: var(--surface-primary);
}

.vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: var(--fs-headline);
    font-weight: 600;
    color: var(--text-brand);
    margin-bottom: var(--sp-sm);
}

.vision-lead[_ngcontent-%COMP%] {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--sp-sm);
}

.vision[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--sp-lg);
}

.scenarios[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--sp-md);
    margin-bottom: var(--sp-lg);
}

.scenario[_ngcontent-%COMP%] {
    border: 1px solid var(--surface-border);
    padding: var(--sp-md);
}

.scenario-label[_ngcontent-%COMP%] {
    display: block;
    font-size: var(--fs-micro);
    font-weight: 600;
    color: var(--text-brand);
    margin-bottom: var(--sp-xxs);
}

.scenario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    color: var(--text-secondary);
    line-height: 1.5;
    font-size: var(--fs-caption);
}

.thesis-cards[_ngcontent-%COMP%] {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--sp-md);
}

.thesis-card[_ngcontent-%COMP%] {
    border: 1px solid var(--surface-border);
    padding: var(--sp-md);
}

.thesis-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
    font-size: var(--fs-caption);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--sp-xs);
}

.thesis-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    color: var(--text-secondary);
    line-height: 1.5;
    font-size: var(--fs-caption);
}

.timeline[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    gap: var(--sp-md);
}

.entry[_ngcontent-%COMP%] {
    border: 1px solid var(--surface-border);
    padding: var(--sp-lg);
    background: var(--surface-primary);
}

.year[_ngcontent-%COMP%] {
    font-size: var(--fs-micro);
    color: var(--text-tertiary);
    display: block;
    margin-bottom: var(--sp-xxs);
}

.entry[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: var(--fs-headline);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--sp-xs);
}

.entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    color: var(--text-secondary);
    line-height: 1.6;
}

.self-ref[_ngcontent-%COMP%] {
    margin-top: var(--sp-xl);
    padding: var(--sp-lg);
    border: 1px solid var(--brand-primary);
    background: var(--surface-primary);
}

.self-ref[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
    font-size: var(--fs-headline);
    font-weight: 600;
    color: var(--text-brand);
    margin-bottom: var(--sp-xs);
}

.self-ref[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    color: var(--text-secondary);
}

.easter-egg[_ngcontent-%COMP%] {
    margin-top: var(--sp-xl);
    font-size: var(--fs-micro);
    color: var(--text-tertiary);
    text-align: center;
    opacity: 0.6;
}

@media (max-width: 760px) {
    .summary[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
    }

    .scenarios[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
    }

    .thesis-cards[_ngcontent-%COMP%] {
        grid-template-columns: 1fr;
    }
}`]})}}return o})();export{l as Prod};
