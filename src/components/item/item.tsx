import { IItemData } from "./item.interface";
import { Link } from "react-router-dom";
import { ItemImg, ItemStyle } from './item.style'
import { useContext } from "react";
import { RootContext } from "../../contexts/root.context";

const Item = ({
                cardClass,
                cardBodyClass,
                cardTitleClass,
                cardTextClass,
                data
              }: IItemData) => {

  const {addToCart} = useContext(RootContext);

  const {_id, name, airline, slogan, count} = data;

  const { logo } = airline[0];

  return (
    <Link to={`/${_id}`} className={'text-decoration-none text-reset my-3 ' + (cardClass || '')}>
      <ItemStyle className={'card'} background={count ? 'red' : ''}>
        <ItemImg className={'card-img-top'} height={'150px'} src={logo} alt={name}/>
        <div className={'card-body ' + (cardBodyClass || '')}>
          {name && <h5 className={'card-title ' + (cardTitleClass || '')}>{name}</h5>}
          {slogan && <p className={'card-text ' + (cardTextClass || '')}>{slogan}</p>}
        </div>
        <button type="button"  onClick={(e)=> { addToCart?.(data); e.preventDefault()} } className="btn btn-outline-primary m-2">Add to Cart</button>
      </ItemStyle>
    </Link>
  )
}

export default Item
