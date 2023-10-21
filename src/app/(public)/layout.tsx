import PublicFooter from '@/components/footer/public'
import PublicHeader from '../../components/layout/header'
import childrenType from '@/types/children'
import { Fragment } from 'react'

const Publiclayout = ({ children }: childrenType) => {
    return (
        <Fragment>
            <PublicHeader />
            <main>{children}</main>
            <PublicFooter />
        </Fragment>
    )
}

export default Publiclayout