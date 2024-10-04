const contente = ({ params }: { params: { slug: string } }) => {
  return <div>contente {params.slug}</div>;
};

export default contente;
