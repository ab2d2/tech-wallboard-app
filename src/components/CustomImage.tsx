export function CustomImage({
  dataPathForChart,
}: {
  dataPathForChart: string;
}) {
  console.log("dataPathForChart", dataPathForChart);
  return (
    <img
      src="../../../public/sample_custom_image.png"
      alt="custom image"
      width={"100%"}
      height={"100%"}
    />
  );
}
