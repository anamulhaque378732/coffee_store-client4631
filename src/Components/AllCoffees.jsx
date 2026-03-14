const AllCoffees = () => {
  const modules = import.meta.glob("../assets/cups/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });

  const images = Object.values(modules).map((mod) => mod.default);

  return (
    <>
      <p className="text-center font-medium">--- Follow on now ---</p>
      <h1 className="text-4xl text-center font-bold my-2 py-2">
        Follow On Instagram
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto text-center lg:mt-12 md:mt-4 mt-2">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Coffee Cup" />
        ))}
      </div>
    </>
  );
};

export default AllCoffees;
