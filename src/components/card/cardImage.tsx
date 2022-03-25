import "../../stylesGlobals/cardImage.css";

interface IProps {
  name: string;
  image: string;
  price: number;
  category: string;
}

function CardImage(props: IProps) {
  const { name, image, price, category } = props;

  return (
    <>
      <div>
        <div className='divMain'>
          <img
            src={image}
            alt='prueba'
            className='cardImg'
            width={300}
            height={400}
          />
          <h4 className='textImg'>{name}</h4>
          <h5 className='textImg'>{price}</h5>
        </div>
      </div>
    </>
  );
}

export default CardImage;
