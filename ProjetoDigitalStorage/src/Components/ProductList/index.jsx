import tenis from '../../public/Layer-2.png';
import '../ProductList/ProductList.css';

import arrow from '../../public/line-arrow.png';
import Filtro from '../ProductFilter';

function ProductsList() {
    return (
        <div className="ProductosCard">
            <div className="ProductosCardContainer">
                <div className="HeaderCards">
                    <h1>Produtos em alta</h1>
                    <a href="">
                        ver todos <img src={arrow} alt="" />
                    </a>
                </div>

                <div className="ProdutoResultado">
                    <div className="produtoFiltro">
                        <Filtro />
                    </div>

                    <div className="CardConteiner">
                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>

                        <div className="Carde">
                            <div className="CardeCenter">
                                <img className="CardeFundo" src={tenis} alt="" />
                                <div className="CardeTexto">
                                    <div>K-Swiss V8 - Masculino</div>
                                    <div>$200 - $100</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsList;
