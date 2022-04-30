import React from 'react';
import {SubContainer, SelectionItem, TitleItems, BtnItems, Selection} from './NavbarStyle'

const NavBar = () => {
    return(
        <>
            <SubContainer>
                <SelectionItem>
                    <span>~개의 렌더샷</span>
                    <Selection>
                        <input type='checkbox'/>
                        <span>모두 선택</span>
                    </Selection>
                </SelectionItem>

                <TitleItems>
                    <strong>갤러리</strong>
                </TitleItems>

                <BtnItems>
                    <button>다운</button>
                    <button>삭제</button>
                    <button>선택취소</button>
                </BtnItems>
            </SubContainer>
        </>
    )
}

export default NavBar;