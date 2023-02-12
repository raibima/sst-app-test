import {StackContext, Api, NextjsSite} from "sst/constructs";

export function AwesomeStack({stack}: StackContext) {
  let site = new NextjsSite(stack, "NextjsApp", {
    path: "nextjs-app/",
  });

  stack.addOutputs({
    URL: site.url || '',
  });
}
