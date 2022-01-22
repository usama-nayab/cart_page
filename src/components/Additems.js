import React from 'react';
class Additems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            price:0
        }
    }
    render() {
        return (
            <div className="container mt-4">
                <form className="row mt-2 form fw-bold" onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.addProduct(this.state.name , this.state.price);
                }} >
                <div className="mb-1 col-sm-3">
                    <label htmlFor="inputname" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="inputname" onChange={(e)=>{
                        this.setState({
                            name : e.currentTarget.value 
                        })
                    }} value={this.state.name}
                    />
                    
                </div>
                <div className="mb-1 col-sm-3">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputPrice" onChange={(e) => {
                        this.setState({
                            price : e.currentTarget.value
                        })
                    }}
                    value={this.state.price}
                    />
                </div>
                <div className='col-sm-3 AddP'>
                <button type="submit" className="btn btn-primary Add">Add Product</button>
                </div>
            </form>
            </div>
        );
    }
}

export default Additems;