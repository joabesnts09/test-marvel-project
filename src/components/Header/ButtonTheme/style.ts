import styled from 'styled-components'

export const DivContainer = styled.div`


    /* transition: background 0.2 linear; */
    input {
        opacity: 0;
        position: absolute;
    }

    label {
        height: 1.625rem;
        width: 3.125rem;
        background-color: #111;
        border-radius: 3.125rem;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid #fff;
        padding: 5px;
        position: relative;

        transform: scale(1.5);

        .icon {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 1.15rem;
            }
        }

        .boll {
            height: 1.375rem;
            width: 1.375rem;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            top: 1px;
            left: 1px;

            transform: translateX(0px);
            transition: transform 0.2s linear;
        }
    }
    input:checked + .label .boll {
        transform: translateX(24px);
    }
`
