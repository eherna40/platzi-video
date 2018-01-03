import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/container/video-player'
class Home extends Component {
    state = {
        modalVisible: false,

    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media: media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }
    rightScroll = (event) =>{
        console.log(event.target.dataset)
    }

    render(){

        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories 
                    categories={this.props.data.categories} 
                    handleOpenModal={this.handleOpenModal}
                    rightScroll={this.rightScroll}
                    />
                    {
                        this.state.modalVisible && //si la condicion se cumple se pone && si la condicion es contraria poner ?
                        <ModalContainer>
                        <Modal handleClick={this.handleCloseModal}>
                            <VideoPlayer autoplay src={this.state.media.src} title={this.state.media.title} />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home