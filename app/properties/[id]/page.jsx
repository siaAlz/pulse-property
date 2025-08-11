const PropertyPage = async ({ params, searchParams }) => {
  const { id } = await params;
  const { name } = await searchParams;
  return (
    <div>
      <h1>page's id: {id}</h1>
      <h2>page's search Params {name}</h2>
    </div>
  );
};

export default PropertyPage;
