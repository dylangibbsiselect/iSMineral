import React from "react";
import { render } from "react-dom";
import { createTheme, ThemeProvider } from "mineral-ui/themes";
import { PrimaryNav, NavItem } from "mineral-ui/Navigation";
import Grid, { GridItem } from "mineral-ui/Grid";
import IconCloud from "mineral-ui-icons/IconInfoOutline";
import Button from "mineral-ui/Button";
import Checkbox from "mineral-ui/Checkbox";
import { CheckboxGroup } from "mineral-ui/Checkbox";
import Radio from "mineral-ui/Radio";
import { RadioGroup } from "mineral-ui/Radio";
import Select from "mineral-ui/Select";
import Dropdown from "mineral-ui/Dropdown";
import TextInput from "mineral-ui/TextInput";
import TextArea from "mineral-ui/TextArea";
import Tabs, { Tab } from "mineral-ui/Tabs";
import Tooltip from "mineral-ui/Tooltip";
import Avatar from "mineral-ui/Avatar";
import Card, {
  CardActions,
  CardBlock,
  CardDivider,
  CardFooter,
  CardImage,
  CardTitle
} from "mineral-ui/Card";
import Popover from "mineral-ui/Popover";
import Menu, { MenuDivider, MenuGroup, MenuItem } from "mineral-ui/Menu";
import Table from "mineral-ui/Table";
import Text from "mineral-ui/Text";

const brandOrange = {
  [10]: "#fff0e0",
  [20]: "#ffd4a8",
  [30]: "#ffb870",
  [40]: "#ff9c38",
  [50]: "#ff7f00",
  [60]: "#e66b00",
  [70]: "#a44e00",
  [80]: "#833d00",
  [90]: "#5b2b00",
  [100]: "#391b00",
  inflection: 40
};

const brandTeal = {
  [10]: "#f5fffe",
  [20]: "#beebe6",
  [30]: "#93d9d2",
  [40]: "#6dc7be",
  [50]: "#4db6ac",
  [60]: "#359c91",
  [70]: "#228278",
  [80]: "#136960",
  [90]: "#084f48",
  [100]: "#013630",
  inflection: 40
};

const brandGrey = {
  [10]: "#fcfcfc",
  [20]: "#e6e6e6",
  [30]: "#cfcfcf",
  [40]: "#b8b8b8",
  [50]: "#a1a1a1",
  [60]: "#8a8a8a",
  [70]: "#737373",
  [80]: "#5c5c5c",
  [90]: "#464646",
  [100]: "#2e2e2e",
  inflection: 40
};

const brandRed = {
  [10]: "#f9f0ee",
  [20]: "#f8b9ab",
  [30]: "#f47f62",
  [40]: "#e2583f",
  [50]: "#d93900",
  [60]: "#c11e04",
  [70]: "#9a1700",
  [80]: "#751000",
  [90]: "#520d00",
  [100]: "#340700",
  inflection: 40
};

const brandPurple = {
  [10]: "#EEDAF2",
  [20]: "#E9BBF2",
  [30]: "#CB89D9",
  [40]: "#AC4EBF",
  [50]: "#9544a6",
  [60]: "#7E3A8C",
  [70]: "#672F73",
  [80]: "#502559",
  [90]: "#391A40",
  [100]: "#221026",
  inflection: 40
};

const brandTheme = createTheme({
  colors: {
    theme: brandGrey,
    success: brandTeal,
    warning: brandPurple,
    danger: brandRed
  },
  overrides: {
    fontFamily: "Proxima Nova",
    fontSize_base: "18px",
    Button_borderRadius: "40px",
    Button_paddingHorizontal: ".75em",
    Button_backgroundColor_primary: brandOrange[50],
    Button_backgroundColor_primary_active: brandOrange[60],
    Button_backgroundColor_primary_focus: brandOrange[50],
    Button_backgroundColor_primary_hover: brandOrange[40],
    Button_boxShadow_focus: "0 0 0 1px #ffffff, 0 0 0 2px #737373",
    CheckboxControl_borderColor_hover: brandTeal[40],
    CheckboxControl_backgroundColor_checked: brandTeal[60],
    CheckboxControl_borderColor_checked: brandTeal[60],
    CheckboxControl_backgroundColor_checkedHover: brandTeal[40],
    CheckboxControl_boxShadow_focus: "0 0 0 1px #ffffff, 0 0 0 2px #228278",
    RadioControl_borderColor_hover: brandTeal[40],
    RadioControl_backgroundColor_checked: brandTeal[60],
    RadioControl_borderColor_checked: brandTeal[60],
    RadioControl_backgroundColor_checkedHover: brandTeal[40],
    RadioControl_boxShadow_focus: "0 0 0 1px #ffffff, 0 0 0 2px #228278"
  }
});

const icon = <IconCloud />;

const selectdata = [
  {
    text: "Build",
    value: "basic"
  },
  {
    text: "Wonder",
    value: "iconStart"
  },
  {
    text: "The Boardroom",
    value: "iconEnd"
  },
  {
    text: "Unite",
    onClick: () => {
      console.log("onClick is not triggered for disabled MenuItems");
    },
    disabled: true,
    value: "disabled"
  },
  {
    group: true,
    title: "Boost Group"
  },
  {
    text: "Pioneer",
    value: "success"
  },
  {
    text: "Participate",
    value: "warning"
  },
  {
    text: "Achieve",
    value: "danger"
  }
];

const selectdatafancy = [
  { text: "Menu item", secondaryText: "Secondary text", value: "basic" },
  {
    text: "Icon at start",
    iconStart: <IconCloud />,
    value: "iconStart"
  },
  {
    text: "Icon at end",
    iconEnd: <IconCloud />,
    value: "iconEnd"
  },
  {
    divider: true
  },
  {
    text: "Disabled menu item",
    onClick: () => {
      console.log("onClick is not triggered for disabled MenuItems");
    },
    disabled: true,
    value: "disabled"
  },
  {
    group: true,
    title: "Group Title"
  },
  {
    text: "Success variant",
    value: "success",
    variant: "success"
  },
  {
    text: "Warning variant",
    value: "warning",
    variant: "warning"
  },
  {
    text: "Danger variant",
    value: "danger",
    variant: "danger"
  }
];

const tabledata = [
  {
    Fruits: "Pomello",
    Vegetables: "Bok Choi",
    Grains: "Chia",
    Dairy: "Pule",
    Protein: "Crickets"
  },
  {
    Fruits: "Starfruit",
    Vegetables: "Romanesco",
    Grains: "Sorghum",
    Dairy: "Casu marzu",
    Protein: "Barnacles"
  },
  {
    Fruits: "Durian",
    Vegetables: "Ramps",
    Grains: "Teff",
    Dairy: "Vieux Lille",
    Protein: "Inca nuts"
  },
  {
    Fruits: "Persimmons",
    Vegetables: "Fiddleheads",
    Grains: "Quinoa",
    Dairy: "Milbenkase",
    Protein: "Spirulina"
  }
];

const App = () => (
  <Grid>
    <GridItem span={4} padding="lg">
      <Button primary>Primary CTA</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button>Secondary CTA</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="success" primary>
        Success CTA
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button primary disabled>
        Primary Disabled
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="danger" primary>
        Primary Danger
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="danger">Secondary Danger</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="success">Secondary Success</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button disabled>Secondary Disabled</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button minimal>ButtonMinimalDefault</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="success" minimal>
        ButtonMinimalSuccess
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button size="small" variant="warning" minimal>
        ButtonMinimalWarning
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button size="small" variant="danger" minimal>
        ButtonMinimalDanger
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button minimal disabled>
        ButtonMinimalDisabled
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button iconStart={icon}>ButtonMinimalDefaultIconStart</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="success" iconEnd={icon} minimal>
        ButtonMinimalSuccessIconEnd
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="warning" iconStart={icon} iconEnd={icon} primary>
        ButtonPrimaryWarningIconBoth
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="danger" iconStart={icon} minimal />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="success" iconStart={icon} primary />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button iconStart={icon} circular />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="warning" iconStart={icon} primary circular />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button size="small" primary>
        ButtonPrimaryDefaultSmall
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="warning" size="medium" minimal>
        ButtonMinimalWarningMedium
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button variant="success" primary>
        ButtonPrimarySuccessLarge
      </Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Button size="jumbo">ButtonDefaultDefaultJumbo</Button>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        name="minerals"
        label="CheckboxUncontrolledChecked"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        name="minerals"
        label="CheckboxUncontrolledChecked"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox name="minerals" label="CheckboxUncontrolled" value="quartz2" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        name="minerals"
        label="CheckboxDisabled"
        value="quartz2"
        disabled
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        name="minerals"
        label="CheckboxLabelLeft"
        value="magnetite"
        labelPosition="start"
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        size="small"
        name="minerals"
        label="CheckboxSmall"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        size="medium"
        name="minerals"
        label="CheckboxMedium"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        name="minerals"
        label="CheckboxLarge"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Checkbox
        size="jumbo"
        name="minerals"
        label="CheckboxJumbo"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <CheckboxGroup
        name="minerals-1"
        defaultChecked={["magnetite", "quartz"]}
        data={[
          { label: "CheckboxGroup1", value: "fluorite" },
          { label: "CheckboxGroup2", value: "magnetite" },
          { label: "CheckboxGroup3", value: "quartz" }
        ]}
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio
        name="minerals"
        label="RadioUncontrolledChecked"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio name="minerals" label="RadioUncontrolled" value="quartz2" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio name="minerals" label="RadioDisabled" value="quartz2" disabled />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio
        name="minerals"
        label="RadioLabelLeft"
        value="magnetite"
        labelPosition="start"
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio
        size="small"
        name="minerals"
        label="RadioSmall"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio
        size="medium"
        name="minerals"
        label="RadioMedium"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio name="minerals" label="RadioLarge" value="quartz" defaultChecked />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Radio
        size="jumbo"
        name="minerals"
        label="RadioJumbo"
        value="quartz"
        defaultChecked
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <RadioGroup
        name="minerals-1"
        defaultChecked={["magnetite", "quartz"]}
        data={[
          { label: "RadioGroup1", value: "fluorite" },
          { label: "RadioGroup2", value: "magnetite" },
          { label: "RadioGroup3", value: "quartz" }
        ]}
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select data={selectdata} placeholder="SelectDefault" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select
        data={selectdata}
        variant="success"
        placeholder="SelectDefaultSuccess"
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select
        data={selectdata}
        variant="warning"
        placeholder="SelectDefaultWarning"
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select
        data={selectdata}
        variant="danger"
        placeholder="SelectDefaultDanger"
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select data={selectdata} placeholder="SelectDefaultDisabled" disabled />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select data={selectdata} size="small" placeholder="SelectDefaultSmall" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select
        data={selectdata}
        size="medium"
        placeholder="SelectDefaultMedium"
      />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select data={selectdata} placeholder="SelectDefaultLarge" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select data={selectdata} size="jumbo" placeholder="SelectDefaultJumbo" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Select data={selectdatafancy} placeholder="SelectFancy" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <Dropdown data={selectdata}>
        <Button>DropdownDefault</Button>
      </Dropdown>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Dropdown data={selectdata} disabled>
        <Button>DropdownDisabled</Button>
      </Dropdown>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Dropdown wide data={selectdata}>
        <Button>DropdownWide</Button>
      </Dropdown>
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput defaultValue="TextInputDefault" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput defaultValue="TextInputDisabled" disabled />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput defaultValue="TextInputReadOnly" readOnly />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput placeholder="TextInputPlaceholder" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput variant="success" defaultValue="TextInputSuccess" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput variant="warning" defaultValue="TextInputWarning" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput variant="danger" defaultValue="TextInputDanger" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput size="small" defaultValue="TextInputSmall" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput size="medium" defaultValue="TextInputMedium" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextInput size="jumbo" defaultValue="TextInputJumbo" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextArea rows={1} size="small" defaultValue="TextAreaSmall" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextArea rows={2} size="medium" defaultValue="TextAreaMedium" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextArea rows={3} size="large" defaultValue="TextAreaLarge" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextArea rows={5} size="jumbo" defaultValue="TextAreaJumbo" />
    </GridItem>
    <GridItem span={4} padding="lg">
      <TextArea rows={5} defaultValue="TextAreaAutosize" autoSize />
    </GridItem>
    <GridItem span={4} padding="lg">
      <p>
        Here's some prose with a{" "}
        <Tooltip content="Helpful tooltip, successful life.">Tooltip</Tooltip>{" "}
        in the middle of it.
      </p>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Card>
        <CardTitle>CardTitle</CardTitle>
        <CardImage
          src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/03/avatar-publicity_still-h_2019.jpg"
          alt="gradient placeholder"
        />
        <CardBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi.
        </CardBlock>
      </Card>
    </GridItem>

    <GridItem span={4} padding="lg">
      <Tabs label="Minerals" height="7.75em">
        <Tab title="Tab" />
        <Tab title="TabSelected" />
        <Tab title="Tab">
          <GridItem span={4} padding="lg">
            <TextInput size="jumbo" defaultValue="TextInputJumbo" />
          </GridItem>
        </Tab>
      </Tabs>
    </GridItem>
    <GridItem span={4} padding="lg">
      <PrimaryNav>
        <NavItem href="#">Nav</NavItem>
        <NavItem selected href="#">
          NavSelected
        </NavItem>
        <NavItem href="#">Nav</NavItem>
      </PrimaryNav>
    </GridItem>
    <GridItem span={4} padding="lg">
      <PrimaryNav minimal>
        <NavItem href="#">NavMinimal</NavItem>
        <NavItem selected href="#">
          NavMinimalSelected
        </NavItem>
        <NavItem href="#">NavMinimal</NavItem>
      </PrimaryNav>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Avatar>
        <img
          src="http://balochistanvoices.com/wp-content/uploads/2015/12/Gravatar.png"
          alt="Allison"
        />
      </Avatar>
      <Avatar>Allison</Avatar>
      <Avatar>
        <IconCloud title="cloud" />
      </Avatar>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Popover content="Popped over!">
        <Button>Open Popover</Button>
      </Popover>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Popover
        content="Popped over!"
        placement="right"
        subtitle="Subtitle"
        title="Title"
      >
        <TextInput placeholder="TextInput with Popover" />
      </Popover>
    </GridItem>
    <GridItem span={4} padding="lg">
      <Menu>
        <MenuItem
          onClick={event => {
            console.log(event);
          }}
        >
          Menu item with onClick
        </MenuItem>
        <MenuItem secondaryText="Secondary text">Menu item</MenuItem>
        <MenuItem iconStart={<IconCloud />}>Icon at start</MenuItem>
        <MenuItem iconEnd={<IconCloud />}>Icon at end</MenuItem>
        <MenuDivider />
        <MenuItem
          disabled
          onClick={event => {
            console.log(event);
          }}
        >
          Disabled menu item
        </MenuItem>
        <MenuGroup title="Group Title">
          <MenuItem variant="success">Success variant</MenuItem>
          <MenuItem variant="warning">Warning variant</MenuItem>
          <MenuItem variant="danger">Danger variant</MenuItem>
        </MenuGroup>
      </Menu>
    </GridItem>
    <GridItem span={8} padding="lg">
      <Table
        data={tabledata}
        rowKey="Fruits"
        title="Foods of the World"
        hideTitle
      />
    </GridItem>

    <GridItem span={4} padding="lg">
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="h4">Heading 4</Text>
      <Text as="h5">Heading 5</Text>
      <Text as="h6">Heading 6</Text>
    </GridItem>

    <GridItem />
    <GridItem />
  </Grid>
);

render(
  <ThemeProvider theme={brandTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
