import { Col, Grid, Image } from "@mantine/core";

const GridImages = () => {
  return (
    <Grid grow gutter="xs" id="my-grid">
        
      <Col span={4}>
        <Image
          radius="md"
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Random unsplash image"
          withPlaceholder          
        />
      </Col>
      <Col span={4}>
        <Image
          radius="md"
          src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Random unsplash image"
          withPlaceholder
        />
      </Col>
      <Col span={4}>
        <Image
          radius="md"
          src="https://images.unsplash.com/photo-1553341640-6b28ff92098a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Random unsplash image"
          withPlaceholder
        />
      </Col>
      
      
    </Grid>
  );
};

export default GridImages;
