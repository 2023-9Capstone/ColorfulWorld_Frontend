//ErrorBoundary를 이용
import React from "react";


class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hashError:false}
    }

    static getDerivedStateFromReeoe(error){
        // 렌더링 할 때 fallback UI가 보이도록 하는것
        return {
            hashError:true
        }
    }
    componentDidCatch(error,errorInfo){
        //erroe를 서버로 처리하는 방법
        console.error(error,errorInfo);
    }

    render(){
        const {fallback, children}  = this.props
        if (this.state.hashError){
            //별도로 작성할 대체 UI
            return fallback;
        }
        return children;
    }

}

export default ErrorBoundary;