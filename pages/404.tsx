import {getLayout} from '@/components/layout/Layout';

function NotFoundPage (){
    return(
        <div>
            <span>404 NOT FOUND</span>
        </div>
    )
}
NotFoundPage.getLayout=getLayout;
export default NotFoundPage;
