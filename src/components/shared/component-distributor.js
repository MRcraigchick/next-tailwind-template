import dynamic from "next/dynamic";

export default function ComponentDistributor({ path, props }) {
  const Component = dynamic(() => import(`@/components/${path}`), {});
  return <Component {...props} />;
}
