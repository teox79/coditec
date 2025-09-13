import classNames from 'classnames';
import { ReactNode } from 'react';

interface OffCanvasCustomProps {
    name: string;
    children: ReactNode;
    id: string;
}

const OffCanvasCustom: React.FC<OffCanvasCustomProps> = ({ name, children, id }) => {

    const classOffCanvas = classNames("offcanvas offcanvas-end");

    return (
        <div className={classOffCanvas} id={id} aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">{name}</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
            <div className="offcanvas-body">
                {children}
            </div>
        </div >
    );
};

export default OffCanvasCustom;
