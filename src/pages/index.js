import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Strong, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			border-width="2px"
			border-style="groove"
			position="static"
			background="(to bottom, #12c2e9, #c471ed, #f64f59);"
			box-shadow="3px 10px 55px 0 transparent"
		>
			<Text
				margin="0px 0 24px 0"
				text-align="center"
				font="--headline1"
				md-font="--headline3"
				white-space="pre-line"
				color="--darkL1"
				letter-spacing="5px"
			>
				Anoop Narayan
			</Text>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			flex-direction="column"
			background="--primaryGradient"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				Anoop narayan-
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Web-Developer in carrier,Well Experienced in Web-Application Designing for Educational and Ecommerce purpose{" "}
			</Text>
		</Section>
		<Section color="--dark">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Education
				<Span
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					-
				</Span>
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Text font="16px --fontFamily-serifGeorgia">
					Higher Education:{" "}
				</Text>
				<Text as="h3" font="--headline3" margin="10px 0">
					B.Tech{" "}
				</Text>
				<Text as="p" font="--base" margin="10px 0" color="--greyD2">
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{"                                   "}I am Currently Pursuing My Under Gradute Degree in Computer Science Stream{" "}
						<br />
						{"                                                      "}@ M. V .J College Of Engineering Situated in IT Hub of India Bengaluru-KA
					</Strong>
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Text font="16px --fontFamily-serifGeorgia">
					Intermediate Education:{" "}
				</Text>
				<Text as="h3" font="--headline3" margin="10px 0">
					P.U.C
				</Text>
				<Text as="p" font="--base" margin="10px 0" color="--greyD2">
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{"                                     "}I Have Completed my Intermediate Studies in P.C.M.B Combination with 75%{" "}
						<br />
						{"                                                                             "}@ Varadadri Pre-University College Situated In Bagepalli-KA
					</Strong>
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Text font="16px --fontFamily-serifGeorgia">
					Secondary Education:{" "}
				</Text>
				<Text as="h3" font="--headline3" margin="10px 0">
					S.S.L.C
				</Text>
				<Text as="p" font="--base" margin="10px 0" color="--greyD2">
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						{"                                                                         "}I Have Completed my Secondary Education with 87% in{" "}
						<br />
						{"                                                                                                          "}Shanthinikethan High School
						<Strong>
							Bagepalli-KA
						</Strong>
						<br />
						{"                                                                            "}
					</Strong>
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			/>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			/>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" color="--dark">
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text as="h2" font="--headline1" margin="0 0 8px 0">
						FAQs
					</Text>
					<Text as="p" font="--lead" margin="0" color="--greyD2">
						Need answers? I got them out for you{" "}
					</Text>
				</StackItem>
				<StackItem width="66.66%" md-width="100%">
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0">
								Development Period for Dynamic Web-App?
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								<Strong>
									Usually I Design the Concept of the Client in Priority then i think of the Development Side , as per the Client Requirement it take the Time to design ..!
								</Strong>
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0">
								Will you Develop offline Web-Applications
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								<Strong
									data-q-widget-type="PRIMITIVE"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Yeah of course I can Design your thought to Reality
								</Strong>
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0">
								How's the Pricing out ?
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								<Strong
									data-q-widget-type="PRIMITIVE"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									It actually Depends upon the Complexity of the Design and Custom Features which you decide to have in your Web-Application. Usually the Pricing is based on Hourly of Rs1850/-
								</Strong>
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" flex-direction="column" />
							<Text as="h3" font="--headline3" margin="12px 0">
								Do we Get Free Stuff..!!
							</Text>
							<Text as="p" font="--base" margin="12px 0" color="--greyD2">
								<Strong
									data-q-widget-type="PRIMITIVE"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Obviously You will be offered to get some new Features for free of cost for limited time period of Purchase..!
								</Strong>
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});