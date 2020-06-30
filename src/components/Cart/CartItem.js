import React from 'react'

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: "4rem", height: "4rem" }} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => value.decrement(id)}>-</span>
                        <span className="mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => value.increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => value.removeItem(id)}>
                    <i className="fa fa-trash" />
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total: $ {total}</strong>
            </div>

        </div>
    )
}
