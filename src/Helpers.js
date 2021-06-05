import Alert from "./views/dashboard/pages/component/Alert";
import Analytics from "./views/dashboard/pages/dashboard/Analytics";
import Inbox from "./views/dashboard/pages/email/Inbox";
import Read from "./views/dashboard/pages/email/Read";
import Compose from "./views/dashboard/pages/email/Compose";
import Chat from "./views/dashboard/pages/chat/Chat";
import Todo from "./views/dashboard/pages/todo/Todo";
import Calendar from "./views/dashboard/pages/calendar/Calendar";
import Grid from "./views/dashboard/pages/grid/Grid";
import Color from "./views/dashboard/pages/color/Color";
import BoxIcon from "./views/dashboard/pages/icon/BoxIcon";
import FeatherIcon from "./views/dashboard/pages/icon/FeatherIcon";
import BasicCard from "./views/dashboard/pages/card/BasicCard";
import ColorCard from "./views/dashboard/pages/card/ColorCard";
import StatisticsCard from "./views/dashboard/pages/card/StatisticsCard";
import Badge from "./views/dashboard/pages/component/Badge";
import Border from "./views/dashboard/pages/component/Border";
import BreadCrumb from "./views/dashboard/pages/component/BreadCrumb";
import Button from "./views/dashboard/pages/component/Button";
import ButtonGroup from "./views/dashboard/pages/component/ButtonGroup";
import Slider from "./views/dashboard/pages/component/Slider";
import Collapse from "./views/dashboard/pages/component/Collapse";
import Display from "./views/dashboard/pages/component/Display";
import Dropdown from "./views/dashboard/pages/component/Dropdown";
import Embed from "./views/dashboard/pages/component/Embed";
import Figure from "./views/dashboard/pages/component/Figure";
import Image from "./views/dashboard/pages/component/Image";
import Jumbotron from "./views/dashboard/pages/component/Jumbotron";
import ListGroup from "./views/dashboard/pages/component/ListGroup";
import MediaObject from "./views/dashboard/pages/component/MediaObject";
import Modal from "./views/dashboard/pages/component/Modal";
import Nav from "./views/dashboard/pages/component/Nav";
import Navbar from "./views/dashboard/pages/component/Navbar";
import Pagination from "./views/dashboard/pages/component/Pagination";
import Progress from "./views/dashboard/pages/component/Progress";
import Spinner from "./views/dashboard/pages/component/Spinner";
import Text from "./views/dashboard/pages/component/Text";
import VerticalAlignment from "./views/dashboard/pages/component/VerticalAlignment";
import Typography from "./views/dashboard/pages/component/Typography";
import ToolTip from "./views/dashboard/pages/component/ToolTip";
import Popover from "./views/dashboard/pages/component/Popover";
import Form from "./views/dashboard/pages/component/Form";
import InputGroup from "./views/dashboard/pages/component/InputGroup";
import Table from "./views/dashboard/pages/component/Table";
import TableDark from "./views/dashboard/pages/component/TableDark";
import Profile from "./views/dashboard/pages/component/Profile";
import Faq from "./views/dashboard/pages/component/Faq";
import Login from "./views/pages/login/Login";
import Register from "./views/pages/register/Register";
import ForgotPassword from "./views/pages/forgot-password/ForgotPassword";

//Capitalize first letter
export const  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Render content
export const  renderContent = (page) => {
    switch (page){
        case 'Alert':
            return <Alert/>
            break
        case 'Analytics':
            return <Analytics/>
            break
        case 'Inbox':
            return <Inbox/>
            break
        case 'Read':
            return <Read/>
            break
        case 'Compose':
            return <Compose/>
            break
        case 'Chat':
            return <Chat/>
            break
        case 'Todo':
            return <Todo/>
            break
        case 'Calendar':
            return <Calendar/>
            break
        case 'Grid':
            return <Grid/>
            break
        case 'Color':
            return <Color/>
            break
        case 'Boxicon':
            return <BoxIcon/>
            break
        case 'Feathericon':
            return <FeatherIcon/>
            break
        case 'Basiccard':
            return <BasicCard/>
            break
        case 'Colorcard':
            return <ColorCard/>
            break
        case 'Statisticscard':
            return <StatisticsCard/>
            break
        case 'Badge':
            return <Badge/>
            break
        case 'Border':
            return <Border/>
            break
        case 'Breadcrumb':
            return <BreadCrumb/>
            break
        case 'Button':
            return <Button/>
            break
        case 'Buttongroup':
            return <ButtonGroup/>
            break
        case 'Slider':
            return <Slider/>
            break
        case 'Collapse':
            return <Collapse/>
            break
        case 'Display':
            return <Display/>
            break
        case 'Dropdown':
            return <Dropdown/>
            break
        case 'Embed':
            return <Embed/>
            break
        case 'Figure':
            return <Figure/>
            break
        case 'Image':
            return <Image/>
            break
        case 'Jumbotron':
            return <Jumbotron/>
            break
        case 'Listgroup':
            return <ListGroup/>
            break
        case 'Mediaobject':
            return <MediaObject/>
            break
        case 'Modal':
            return <Modal/>
            break
        case 'Nav':
            return <Nav/>
            break
        case 'Navbar':
            return <Navbar/>
            break
        case 'Pagination':
            return <Pagination/>
            break
        case 'Progress':
            return <Progress/>
            break
        case 'Spinner':
            return <Spinner/>
            break
        case 'Text':
            return <Text/>
            break
        case 'Verticalalignment':
            return <VerticalAlignment/>
            break
        case 'Typography':
            return <Typography/>
            break
        case 'Tooltip':
            return <ToolTip/>
            break
        case 'Popover':
            return <Popover/>
            break
        case 'Form':
            return <Form/>
            break
        case 'Inputgroup':
            return <InputGroup/>
            break
        case 'Table':
            return <Table/>
            break
        case 'Tabledark':
            return <TableDark/>
            break
        case 'Profile':
            return <Profile/>
            break
        case 'Faq':
            return <Faq/>
            break
        case 'Login':
            return <Login/>
            break
        case 'Register':
            return <Register/>
            break
        case 'Forgot-password':
            return <ForgotPassword/>
            break
        default:
            break
    }
}

