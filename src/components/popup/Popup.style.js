import styled from "styled-components";

export const Container = styled.div`
padding: 10px 70px;
width: 95%;
min-height: 100vh;
position: relative;
margin: 0 auto;
/* display: flex;
justify-content: center;
align-items: center; */

.media-container{
    display: grid;
    grid-template-columns: auto auto auto auto;
    /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
    gap: 15px;
    margin: 20px auto;

    .media{
        width: 291px;
        height: 292px;
        border-radius: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.7);
        overflow: hidden;
        cursor: pointer;
    }

    .media :is(video, img) {
        height:100%;
        width:100%;
        object-fit: cover;
        transition: all 0.3s linear;

        &:hover{
            transform: scale(1.1);
        }
    }    
}

.popup-media{
    position:fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;

    :is(video, img) {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    max-width: 95%;
    min-height: 95%;
    object-fit: contain;
    border: 3px solid #fff;

    }

    span{
        position: absolute;
        top: 5px;
        right: 20px;
        font-size: 50px;
        font-weight: bolder;
        z-index: 100;
        cursor: pointer;
        color: #fff;
        user-select: none;
    }
}


`
