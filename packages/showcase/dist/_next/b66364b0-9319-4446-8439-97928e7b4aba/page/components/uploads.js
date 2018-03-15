
          window.__NEXT_REGISTER_PAGE('/components/uploads', function() {
            var comp = module.exports=webpackJsonp([29],{1253:function(e,n,t){e.exports=t(1254)},1254:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(0),l=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(o),i=t(10),s=t(13),r=a(s),u=t(214),p=a(u),d=t(213),c=a(d),f=[{name:"action",description:"URL of the action to be performed.",defaultValue:"",type:"string",optional:!1},{name:"accept",description:"Takes a comma-separated list of allowed file extensions or MIME types.",defaultValue:'""',type:"string",optional:!0},{name:"data",description:"Aditional data to be sent in the body of the request.",defaultValue:"{ }",type:"object",optional:!0},{name:"disabled",description:"Indicates that the uploader is not available for interaction.",defaultValue:"false",type:"boolean",optional:!0},{name:"headers",description:"Request headers",defaultValue:"{ }",type:"object",optional:!0},{name:"multiple",description:"Indicates whether the user can enter more than one file.",defaultValue:"false",type:"boolean",optional:!0},{name:"name",description:"Name of the file input control.",defaultValue:'"file"',type:"string",optional:!0},{name:"onBeforeUpload",description:"Function to be executed before uploading the files.",defaultValue:"void",type:"func",optional:!0},{name:"onStartUpload",description:"Function to be executed right before the uploading process starts.",defaultValue:"void",type:"func",optional:!0},{name:"onError",description:"Function to be executed when a file is successfully uploaded.",defaultValue:"void",type:"func",optional:!0},{name:"onSuccess",description:"Function to be executed when a file is successfully uploaded.",defaultValue:"void",type:"func",optional:!0}];n.default=function(e){return l.createElement(r.default,{pathname:e.url.pathname},l.createElement(i.Card,null,l.createElement("p",null,"Uploads are great components!"),l.createElement("h2",null,"Usage"),l.createElement(c.default,{snippet:'\n(() => {\n  class ComponentWithUploader extends React.Component {\n    state = {\n      files: []\n    }\n\n    uploaderProps = {\n      action: "//jsonplaceholder.typicode.com/posts/",\n      data: { x: 1, y: 2 },\n      headers: {\n        authorization: "authorization-text"\n      },\n      multiple: true,\n      onBeforeUpload: (file, files) => {\n        this.setState({ files })\n      },\n      onStartUpload: (file) => {\n        const files = this.updateStatus(file, "uploading")\n        this.setState({ files })\n      },\n      onSuccess: (response, file) => {\n        const files = this.updateStatus(file, "success")\n        this.setState({ files })\n      },\n      onError: (error, file) => {\n        const files = this.updateStatus(file, "error")\n        this.setState({ files })\n      }\n    }\n\n    getColor = (status) => {\n      const colorsMap = {\n        uploading: "#1499CE",\n        success: "#00b34d",\n        warning: "#FFAE00",\n        error: "#DE1A1A"\n      }\n      return colorsMap[status]\n    }\n\n    getIconName = (status) => {\n      const iconsMap = {\n        uploading: "Loader",\n        success: "CheckCircle",\n        error: "AlertCircle"\n      }\n      return iconsMap[status]\n    }\n\n    updateStatus = (file, status) =>\n      this.state.files.map(item => {\n        if (item.name === file.name) {\n          item.status = status\n        }\n        return item\n      })\n\n    renderFileList = () => {\n      const { files } = this.state\n      return (\n        <ul style={{ padding: 0 }}>\n          {files.map((file, i) => (\n            <li\n              key={i}\n              style={{\n                listStyle: "none",\n                color: this.getColor(file.status),\n                padding: "6px 0",\n                display: "flex",\n                alignItems: "center",\n                transition: "color .5s ease"\n              }}\n            >\n              <Icon name={this.getIconName(file.status)} />\n              <span style={{ marginLeft: 8 }}>{file.name}</span>\n            </li>\n          ))}\n        </ul>\n      )\n    }\n\n    render() {\n      return (\n        <div>\n          <Upload {...this.uploaderProps}>\n            <Button>\n              <Icon name="Upload" /> Upload\n            </Button>\n          </Upload>\n          {this.renderFileList()}\n        </div>\n      )\n    }\n  }\n\n  return (\n    <div>\n      <ComponentWithUploader />\n    </div>\n  )\n})()\n',components:{Upload:i.Upload,Icon:i.Icon,Button:i.Button}}),l.createElement("h2",null,"Props"),l.createElement(p.default,{props:f})))}}},[1253]);
            return { page: comp.default }
          })
        