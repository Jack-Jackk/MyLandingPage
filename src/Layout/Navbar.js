import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import * as React from "react";

const Navbar = () => {



return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				position="sticky"
				style={{ background: "#E3FEE6" }}
				>
                    <Toolbar>
					<Typography
						variant="h6"
						noWrap
						sx={{ flexGrow: 1 }}
						color="black"
						component="div">
						I Need a Thing
					</Typography>
                    </Toolbar>
            </AppBar>
		</Box>
	);
};
export default Navbar;
