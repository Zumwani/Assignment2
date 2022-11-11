import { useEffect } from "react"
import { useLocation } from "react-router-dom";

export const NavigationManager = ({ children }) => {

    const location = useLocation();

    const capitalize = (text) =>
        text.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase());

    const setTitle = () => {

        var loc = location.pathname;
        if (loc.endsWith("/"))
            loc = loc.slice(0, -1);

        const title = loc.trimEnd("/").split("/").slice(-1).pop().replaceAll("-", " ");

        document.title = (title == "" ? "" : (capitalize(title) + " - ")) + "Fixxo";
        
    }

    const scrollToTop = () =>
        window.scroll(0, 0);

    useEffect(() => {
        setTitle();
        scrollToTop();
    }, [location]);

    return <>
        {children}
    </>

}