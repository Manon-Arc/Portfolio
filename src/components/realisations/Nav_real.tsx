import '../../style/components/Nav_real.css';
import '../../style/style_gen.css';
import { selectedCategory } from '../../js/selectCatReal.ts';

const Nav_real = () => {
    return (
        <div className="category-proj">
            <div onClick={(event) => selectedCategory(event.currentTarget as HTMLDivElement)} className="category-item All selected-category">
                <p className="txt-category-real">
                    Tout
                </p>
            </div>
            <div className="line-category"></div>
            <div onClick={(event) => selectedCategory(event.currentTarget as HTMLDivElement)} className="category-item ProjDev">
                <p className="txt-category-real">
                    <span>Projets </span>
                    <span>développement</span>
                </p>
            </div>
            <div className="line-category"></div>
            <div onClick={(event) => selectedCategory(event.currentTarget as HTMLDivElement)} className="category-item ProjSysEmb">
                <p className="txt-category-real">
                    <span>Projets </span>
                    <span>systèmes embarqués</span>
                </p>
            </div>
        </div>
    );
}

export default Nav_real;
