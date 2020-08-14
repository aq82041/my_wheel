import Vue from 'vue'
import Button from "./src/Button";
import ButtonGroup from "./src/ButtonGroup";
import Icon from "./src/Icon";
import Input from "./src/Input";
import Row from "./src/Row";
import Col from "./src/Col";
import Layout from './src/Layout'
import Sider from './src/Sider'
import Header from './src/Header'
import Content from './src/Content'
import Footer from './src/Footer'
import plugin from './src/plugin.js'
import TabsHead from './src/Tabs-Head'
import TabsBody from './src/Tabs-Body'
import TabsItem from './src/Tabs-Item'
import TabsPane from './src/Tabs-Pane'
import Tabs from './src/Tabs'
import Popover from "./src/Popover";
import Collapse from "./src/Collapse";
import CollapseItem from './src/Collapse-Item'

Vue.use(plugin)

export {Button,ButtonGroup,Icon,Input,Row,Col,Layout,
    Sider,Header,Content,Footer,plugin,Tabs,TabsBody,
    TabsHead,TabsItem,TabsPane,Popover,Collapse,CollapseItem}