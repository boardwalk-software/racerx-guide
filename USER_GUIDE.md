---
title: User Guide
version: 19
---

# Welcome

## About this guide

This guide explains how to use project codename *RacerX* on a computer (Mac, Windows and Linux) and on mobile (iPhone/iPad and Android). It has three kinds of pages:

- **Getting started and tutorials**: short, hands-on lessons. If you're new, start with **Tutorial 1**.
- **Reference pages**: what each part of *RacerX* does, screen by screen.
- **Architecture and Support**: how *RacerX* works inside, where it keeps things, and what to do when something goes wrong. These pages are more technical.

**It keeps itself up to date.** The guide is a PDF that *RacerX* downloads and keeps current on its own. When a newer edition is published, *RacerX* fetches it the next time it starts, so you don't need a *RacerX* update to get guide fixes. If you're offline, the last copy you downloaded keeps working.

**Beta testers:** you're testing the tutorials as well as the software. Tell us where a step didn't match what you saw, what was unclear, and how long each tutorial really took.

## Caveat emptor

*Caveat emptor* is Latin for "let the buyer beware."

This user guide covers the *Beta-1* release, which is known to contain both defects and unfinished features. Screens will change, some features are missing, and you'll find bugs we haven't. We follow the philosophy that "if you're not embarrassed by your first release, then you waited too long to release it" (after Reid Hoffman, the founder of LinkedIn).

In *Beta-1*:

- The mobile app runs on iPhone. iPad and Android come later.
- Some parts of this guide describe *RacerX* as it's meant to work, and you may find a step that doesn't match what you see. That's one of the things the beta is for.
- Keep your own copy of any data you can't afford to lose.

## Why *RacerX* is different

Most business software lives in a data center. The application runs on the vendor's servers, your data sits in the vendor's database, and every computer and phone is only a window onto it. When those servers are slow or down, so is your work; when you stop paying, or the vendor closes, your data goes with them. And every new service like that needs more data center capacity, with the power, water, land and noise that come with it, which more and more communities are pushing back against.

*RacerX* turns that around. **The application server and the database server move onto your own devices.** Every computer and phone runs the whole application, with its own copy of each app's database, so it's fast and keeps working offline. It puts to work the computing power you already own, on your desk and in your pocket, instead of asking for more in a data center. All that's left in a data center is your data's files, in cloud storage you already have (Dropbox, OneDrive or iCloud Drive) or on a network share in your own office. That storage just holds the files and carries changes between devices. *RacerX* runs no servers of its own, so its data center footprint is small: ordinary file storage, which you control.

What that means for you:

- **Your data stays yours**, in storage you choose, or on this device only. The free plan from Dropbox, OneDrive or iCloud Drive is enough to get started.
- **Fast, and works offline.** Every list, search and report runs on your own device. Changes sync when you're back online.
- **Multi-user apps.** Share an app with other people as Read-Write or Read-Only members; everyone's devices stay in step through the shared storage.
- **Every major device:** Mac, Windows and Linux computers, and mobile (iPhone/iPad and Android).
- **No servers to set up or pay for**, and no IT department needed.
- **AI is optional.** *RacerX* works fully without it. If you want AI to help design apps or write queries, you bring your own key from an AI provider (Claude, OpenAI or Gemini), and *RacerX* guides you through getting one, on a free or a paid plan.
- **You decide how far to go.** Start free, on one device, with one simple app. Add cloud storage, more people, more apps or AI when you want them: how complex or expensive it gets is up to you.

## What *RacerX* does

*RacerX* lets you build and use your own database apps (a CRM, an issue tracker, a wedding planner, a team chat) without a server, at home, or at work, possibly without requiring support from an IT department. You design an app with tables, fields and links between tables, then you and the people you share it with add and edit records from a computer or a phone.

**Your data stays in your own storage.** Each app lives either on this device only, or in cloud storage you already have: Dropbox, OneDrive, iCloud Drive or a network file share. *RacerX* on each device reads and writes each app's files in your storage directly, and keeps a fast local copy so your apps work offline.

**What's in *RacerX*:**

- **Apps** you create from scratch, from included examples, or from a spreadsheet or SQLite database upload, each with lists, record forms, lookups between tables and live reports.
- **Sharing**: invite other people to an app as **Read-Write** or **Read-Only** members.
- **Schema Editor**: design an app's tables, fields, views and reports, with an optional **✨ AI** assistant.
- **SQL Viewer**: look at the data directly with SQL, or describe what you want and let an AI write the query.
- **Sync Dashboard**: see how each app is keeping in step with its storage, and what happened recently.

The SQL Viewer and Sync Dashboard are tools that will help you, if you need it, to troubleshoot your app.

## How it works

Every app on your devices has a local copy in a small database on each device. Everything you see is read from that copy, which is why *RacerX* is fast and works offline.

**When you change something:**

1. You save a record. It's written to the local copy immediately, so you see it straight away.
2. The change is queued and uploaded to the app's storage as a small file.
3. Other devices that use the app check the storage on a schedule, download new files and add them to their own copies.
4. Their screens refresh on their own.

**How often apps check for changes.** By default an app checks every 5 minutes while *RacerX* is in front (every 10 minutes for OneDrive), and also when you come back to *RacerX* from a different application on your device. While *RacerX* is in the background it doesn't check, unless the app's owner turned that on. Owners can change both in the Schema Editor (**⚙️ Settings → Check for changes**). You can force *RacerX* to instantly check the cloud storage for changes via the **Sync** button in the Sync Dashboard.

**If several people edit the same record at about the same time**, the last save wins: the record as it was in that save replaces the others, and the earlier edits are lost without a warning. "At about the same time" means before their devices have picked up each other's change, which usually means within the few minutes between checks, and longer if someone is offline. Edits to different records never conflict.

Planned improvements:

- **Check before saving.** When you save, *RacerX* first checks the storage for a newer version of that record, saved since you started editing, and tells you instead of overwriting it.
- **Start from the latest version.** Opening a record for editing first fetches its latest version, so you don't start from an out-of-date copy.
- **Recover an earlier version.** A record's history, and a list of recently deleted records to bring back.
- **Apps designed to avoid conflicts.** For example, an inventory app that records each stock movement as a new record instead of editing a quantity, so two people's changes never collide.

**Your files in the cloud.** *RacerX* talks to Dropbox and OneDrive through their own services, so you don't need the Dropbox or OneDrive desktop programs. iCloud Drive and network shares are used as folders on your computer. *RacerX* keeps everything for one storage in its own top-level folder there, with one folder per app.

## System requirements

| Platform | Supported |
|---|---|
| macOS | Apple Silicon Macs (Intel Macs aren't supported) |
| Windows | Windows 11, on x64 or ARM64 PCs |
| Linux | x64 and ARM64; distributed as a Flatpak |
| iPhone | Supported (iPad uses the same app) |
| Android | Not yet |

**Storage you can use:**

| Storage | Mac | Windows | Linux | iPhone |
|---|---|---|---|---|
| This device only | Yes | Yes | Yes | Yes |
| Dropbox | Yes | Yes | Yes | Yes |
| OneDrive | Yes | Yes | Yes | Yes |
| iCloud Drive | Yes | Use apps made elsewhere; can't create them or do owner tasks | No (Apple doesn't make iCloud Drive for Linux) | Yes |
| Network File Share (SMB) | Yes | Yes | Yes | No |

A free Dropbox or OneDrive account is enough to get started. You can also use *RacerX* with no account at all: apps kept on this device only need no sign-in.

# Getting Started

## Finding your way around

On a computer, the window has a **sidebar** on the left and **tabs** across the top of the main area.

**The sidebar** lists your apps first. Click an app to open it in a tab, or to switch to its tab if it's already open. Below the apps are the tools:

| Tool | What it does |
|---|---|
| **＋ Add App** | Create an app, add the apps you use on your other devices, or join an app someone shared with you |
| **✏️ Manage Apps** | Every app on this device, with its menu (**⋮**) for sharing, design, import/export and deleting |
| **🔑 API Keys** | Your own AI provider keys, for the AI features |
| **SQL Viewer** | Query the data with SQL |
| **Sync Dashboard** | How each app is syncing. Its dot is green when all is well and red when something needs attention |
| **📖 User Guide** | This guide |

Drag the sidebar's right edge to make it wider or narrower (double-click the edge to reset it). The collapse button shrinks it to a narrow strip of icons.

**The bottom of the sidebar** shows your storage:

- **Dropbox** and **OneDrive** icons. A dimmed icon means you're signed out: click it to sign in. Point at a signed-in icon to see the account; click it to see the account details and **Sign out of …**.
- An **iCloud Drive** icon, when you have apps in iCloud Drive.
- A **Network File Share** icon, when you have apps on a network share. It shows whether the share is connected.

**Tabs.** Each app or tool you open gets a tab. Close one with its **×**.

## Signing in to cloud storage

There's no separate account to create: your Dropbox or OneDrive account is your identity. iCloud Drive uses the Apple account the device is signed in to, and a network share uses your computer's access to that share. Apps kept on this device only need nothing at all.

**To sign in to Dropbox or OneDrive:**

1. Click the dimmed **Dropbox** or **OneDrive** icon at the bottom of the sidebar. (You're also offered **Sign In…** whenever you pick that storage in **Add App**.)
2. Your web browser opens the provider's sign-in page. Sign in and click **Allow**.
3. Go back to *RacerX*. The icon is no longer dimmed.

Your password goes only to Dropbox or Microsoft. *RacerX* keeps the sign-in it's given in your computer's secure storage (the macOS keychain or Windows Credential Manager), so it stays signed in after a restart.

**To sign out:** click the provider's icon at the bottom of the sidebar, then **Sign out of Dropbox** (or OneDrive) and **Confirm**. Your data in the cloud isn't touched.

**While you're signed out**, apps you own in that storage stay on the **Owner** tab of **Manage Apps**, marked **Signed out**, and nothing about them syncs until you sign in again. Click **Signed out** to sign in.

You can be signed in to Dropbox and OneDrive at the same time, but to only one account of each.

## Adding an app

Click **＋ Add App** in the sidebar. It offers three choices:

- **Create a new app**: start from scratch, from an example, or from a spreadsheet or SQLite file. You'll be its owner.
- **Add my apps from my other devices**: everything you already use on another device, whether you created it or joined it, brought to this device.
- **Join someone else's app**: an app someone has just shared with you. You'll need their invitation: a link, an email or an iCloud share.

**Creating an app** has three steps in one dialog:

1. **Start from**: **Blank app**, **Examples**, **SQLite database** or **CSV or Excel file**.
   - **Examples** offers **CRM**, **Issue Tracker**, **Wedding Planner**, **Chinook (music store)**, **Sakila (DVD rental)** and **Chat**. Each comes with sample data.
   - **SQLite database**: **A file on this device** (**Choose File…**) or **A web address (URL)**.
   - **CSV or Excel file**: **Choose File…** for a .csv, .xlsx or .xls file.
2. **Name**: the app's name. For a file, it's filled in from the file name.
3. **Storage**: where the app lives (see the next page). If you pick Dropbox or OneDrive while signed out, **Sign In…** appears; the dialog stays open while you sign in.

Then click **Deploy**. The dialog shows each step as it works, and the app appears in the sidebar.

**Adding your apps from other devices:** tick where your apps live (**Dropbox**, **OneDrive**, **Network File Share**, **iCloud Drive**), then search. *RacerX* lists everything there that isn't on this device yet; click **Add** for each one you want. For a network share you're asked to choose the share's folder; on Windows you may be asked to choose your iCloud Drive folder.

**Joining someone else's app:** choose where the owner shared it, and follow the steps shown. They're different for each storage; **Tutorial 4** walks through all of them.

## Where an app lives

When you create an app you choose its storage. You can't move an app to different storage later, so it's worth a moment's thought.

| Storage | Choose it when |
|---|---|
| **Local (offline)** | The app is just for you, on this device. It isn't in the cloud and no one else can open it. |
| **Dropbox** | You want the app on several devices, or to share it, and you use Dropbox. The app goes in the app's own folder in your Dropbox; you don't choose a folder. |
| **OneDrive** | The same, for OneDrive. |
| **iCloud Drive** | You and the people you share with use Macs and iPhones. Create iCloud apps on a Mac, iPhone or iPad. Windows can use iCloud apps made elsewhere but can't create them or do owner tasks; Linux can't use iCloud Drive. |
| **Network File Share** | The app should live on a NAS or a shared server folder. You choose the folder. Only Mac, Windows and Linux computers can open these apps: phones and tablets can't. |

To share a cloud app later, open **Manage Apps**, choose **Sharing** from the app's **⋮** menu, and follow the steps there.

## Using *RacerX* on your iPhone

*RacerX* on the iPhone opens the same apps as your computer, with the same records. It's designed for looking things up and making quick changes; designing apps and sharing them are done on a computer.

**The menu (☰)** lists your apps, then the tools: **Add App**, **Manage Apps**, **Sync Dashboard**, **User Guide**, and a dark/light mode switch. Tap an app to open it.

**Adding apps on the iPhone** (**Add App**):

- **Start from an example**: a ready-made app with sample data, kept on this device or in iCloud Drive.
- **Add my apps from my other devices**: **iCloud Drive** (the folder your Mac uses for its apps; the phone asks you to choose it the first time, then remembers it), **Dropbox** or **OneDrive**. If you're signed out of one, tapping it signs you in first.
- **Join someone else's app**: **iCloud Drive** (choose the folder they shared, after accepting the invitation), **OneDrive** (paste the link they sent you) or **Dropbox** (accept the invitation email, then **Look in my Dropbox**).

**The cloud dots** at the bottom of the menu show each cloud's state:

- **Green**: signed in and working.
- **Red**: signed in, but there's a problem, for example the phone isn't connected to the internet, or the sign-in has expired. Tap it to see what's wrong, with **Try again** or **Sign in to … again**.
- **Gray**: you signed out.

While the phone is offline, its apps keep working with the copy on the phone; changes upload once it's back online.

**Manage Apps** on the iPhone lets you **Open** an app, see **App info…**, **Re-download all data**, and **Remove from this device** (the cloud copy and other devices keep it). Deleting an app for everyone is done on a computer.

# Tutorials

## Tutorial 1: Your first app, from an example

Video: coming soon

**Goal:** create the CRM example and use it: browse its lists, open a record, add a contact and link it to a company.

Time: about 15 minutes

You'll need: *RacerX* on a Mac, Windows or Linux computer. No cloud account is needed.

### Part 1: Create the CRM

1. In the sidebar, click **＋ Add App**, then **Create a new app**.
2. Under **1. Start from**, choose **Examples**, then **CRM** in the second list.
3. Under **2. Name**, type **My CRM**.
4. Under **3. Storage**, click **Local (offline)**.
5. Click **Deploy**. When the dialog says the app was created, click **Done**.

**Check your result:** **My CRM** is in the sidebar with its icon. Click it: it opens in a new tab.

### Part 2: Browse the lists

The panel on the left of the app lists its tables under **Forms**: **Contacts**, **Companies** and **Deals**. (A **Reports** section below lists the app's reports.)

1. Click **Companies**. There are three: **Acme Corp**, **GlobalTech** and **StartupCo**.
2. Click **Contacts**. There are three contacts: **Alice Johnson**, **Bob Smith** and **Carol Davis**.
3. Look at the **Company** column. Each contact shows a company *name*, not a code. That's a **lookup**: the contact's record points to a row in Companies.
4. Click **Deals**. Two deals: **Acme Annual License** and **GlobalTech Pilot**, each with its Company and Contact.

**Check your result:** Alice Johnson's company is Acme Corp, Bob Smith's is GlobalTech, Carol Davis's is StartupCo.

### Part 3: Sort and filter

1. In **Contacts**, click the **Last Name** column heading. A small menu opens.
2. Click **↓ Sort Z → A**. The contacts are now sorted by last name, from Z to A.
3. Click the heading again, and in **Filter contains…** type **smi**. Only Bob Smith is left.
4. To clear it, click **×** in the filter box (or **Clear filters** when it's shown).

**Check your result:** with the filter, one row; without it, three.

### Part 4: Open and edit a record

1. Click **Alice Johnson**'s row. Her record opens in a panel on the right.
2. Click **Edit**. The fields become editable. **Save** stays gray until you change something.
3. Change **Status** (or any field) and click **Save**.

**Check your result:** the list shows the new value. Drag the panel's left edge to make it wider or narrower.

### Part 5: Add a contact linked to a company

1. Click **+ New** at the top of the list. A **New Record** panel opens.
2. Fill in a first name, a last name and an email.
3. Click in the **Company** field and type **glo**. The list shows **GlobalTech**. Click it.
4. Click **Save**.

**Check your result:** the new contact is in the list with **GlobalTech** in the Company column. Open **Companies → GlobalTech**: its record lists its contacts, now including yours.

### What you learned

- Creating an app from an example, kept on this device.
- Moving between an app's tables, sorting and filtering a list.
- Opening, editing and adding records.
- Using a lookup to link a record to another table.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

## Tutorial 2: Build an app from scratch

Video: coming soon

**Goal:** design a small app with two linked tables: **Books** and **Authors**, where each book has an author.

Time: about 25 minutes

You'll need: *RacerX* on a computer. No cloud account is needed.

### Part 1: Create a blank app

1. Click **＋ Add App** → **Create a new app**.
2. **1. Start from**: **Blank app**. **2. Name**: **Library**. **3. Storage**: **Local (offline)**.
3. Click **Deploy**, then **Done**.
4. Open **Manage Apps**, find **Library** on the **Owner** tab, click its **⋮** and choose **✏️ Schema Editor**.

**Check your result:** the Schema Editor opens in its own tab, with **Tables**, **Views** and **Reports** on the left.

### Part 2: Add the Authors table

1. Click **+ Add Table**. A table called **New Table** appears, with its name ready to edit. Type **Authors** and press Enter.
2. On the **Fields** tab, click **+ Add Field**. Type the label **Name**. Leave **Type** as **Text**.
3. Click **+ Add Field** again: label **Country**, type **Text**.

The **Column ID** is filled in from the label (for example **name**). It's the field's name in the database, and it's locked once the schema is saved.

**Check your result:** Authors has two fields. Below them, **Built-in fields** lists what every record gets on its own (**Created at**, **Created by** and so on).

### Part 3: Add the Books table, linked to Authors

1. Click **+ Add Table** and name it **Books**.
2. Add a field **Title** (**Text**) and a field **Year** (**Number**).
3. Add a field **Author** and set its **Type** to **Lookup**. In **Options / Lookup**, pick **Authors** from **— pick table —**.
4. Under the lookup you'll see **Show as: Name (automatic)**: a book will show its author's name. To change it, click **Change…** and tick the Authors fields to show, in order; **Use automatic** goes back.

**Check your result:** Books has Title, Year and Author, and Author's line reads **Show as: Name (automatic)**.

### Part 4: Arrange the list and the form

1. With **Books** selected, open the **List** tab. Drag the columns into the order you want, and click **Visible** / **Hidden** to choose which ones the list shows.
2. Open the **Record form** tab. This is the record panel's layout: drag fields between sections, or add one with **+ Add Section**.

### Part 5: Add a view

A view is a saved query that joins tables. Let's show each book with its author's country.

1. Under **Views**, click **+ Add View** and choose **Books** as its table.
2. Under **Joins**, connect **Authors** through the Author lookup.
3. Add the fields you want, including **Country** from Authors.
4. Under **Navigation Placement**, choose **Add as additional nav item** so the view shows in the app's left panel.

**Check your result:** **View SQL** shows the query the view runs.

### Part 6: Save

1. Look at the top of the editor: **● unsaved** means there are changes to save. **↩ Undo** and **↪ Redo** step through them.
2. Click **Save**. When it's saved, the button briefly shows **✓**.

If the schema has a problem (a lookup to a missing table, a duplicate Column ID), a **Couldn't save the schema** dialog lists what to fix.

### Part 7: Try it

1. Click **Library** in the sidebar. The left panel lists **Authors**, **Books** and your view.
2. In **Authors**, add two authors with **+ New**.
3. In **Books**, add a book and pick its author by typing part of the name in the **Author** field.

**Check your result:** the book's Author column shows the author's name, and your view shows the author's country.

### What you learned

- Tables, fields, field types and Column IDs.
- A lookup between tables, and **Show as**.
- The **List** and **Record form** layouts.
- A view that joins tables, added to the app's navigation.
- Saving, undo and redo in the Schema Editor.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

## Tutorial 3: Import a spreadsheet

Video: coming soon

**Goal:** turn a spreadsheet into an app, then add more rows to it from a CSV file.

Time: about 15 minutes

You'll need: *RacerX* on a computer, and a spreadsheet program (Numbers, Excel, LibreOffice or Google Sheets).

### Part 1: Make a small spreadsheet

Create a spreadsheet with these columns in the first row, and four or five rows below:

```text
Name,Email,Phone,Joined
Ann Lee,ann@example.com,555-0110,2026-01-15
Raj Patel,raj@example.com,555-0111,2026-02-03
...
```

Save it as **members.csv** (or as **members.xlsx**; for an Excel file, only the **first sheet** is imported).

### Part 2: Create an app from it

1. Click **＋ Add App** → **Create a new app**.
2. **1. Start from**: **CSV or Excel file**, then **Choose File…** and pick your file.
3. **2. Name** is filled in from the file name. Change it to **Members** if you like.
4. **3. Storage**: **Local (offline)**.
5. Click **Deploy**. The dialog reports what it found, for example *Found 4 columns, 5 rows* and *Schema: 1 table, 4 fields (types inferred)*.

The first row becomes the fields. *RacerX* guesses each field's type from its values (numbers, dates, text), so **Joined** becomes a date field.

**Check your result:** open the app: one table with your rows. Open a record: **Joined** shows as a date.

**On a cloud storage:** if you pick Dropbox, OneDrive, iCloud Drive or a network share, an extra choice appears, **Upload as: single baseline (recommended)** or **individual record files**. Keep the recommended choice: it's much faster for big files.

### Part 3: Add more rows from a CSV

Importing into an app that already exists matches the file to a table:

- The **file name** should be the table's Column ID style name (for example **members.csv** for a table whose id is *members*). If no table has that name, the table whose fields best match the headings is used.
- The **headings** must be the fields' **Column IDs** (lowercase, like *name*, *email*), not their labels.

The easiest way to get a file in the right shape is to export first:

1. Open **Manage Apps**, click the app's **⋮** and choose **⬅ Export Data to CSVs**. *RacerX* writes one CSV per table to a folder named after the app, in your **Downloads** folder, and shows where.
2. Open the exported CSV, delete the existing rows, and add two new ones. Keep the heading row as it is. Save it with the same name.
3. Back in **Manage Apps**, click the app's **⋮** → **➡ Import Data from CSVs**, and pick the file. You can pick several files at once, one per table.

**Check your result:** the app has the original rows plus the two new ones. Importing **adds** rows: it doesn't change or remove the ones already there.

### What you learned

- Creating an app from a CSV or Excel file, and how field types are guessed.
- Exporting an app's data to CSV files.
- Importing more rows into an existing app, and how files and headings are matched.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

## Tutorial 4: Share an app, and join one

Video: coming soon

**Goal:** share an app with another person, and see what each of you can do.

Time: about 20 minutes (plus waiting for the other person)

You'll need: two people (or two of your own accounts on two computers), and a cloud storage both of you use: Dropbox, OneDrive or iCloud Drive. For iCloud Drive, both of you need a Mac or an iPhone.

### Part 1 (owner): Create a cloud app

1. **＋ Add App** → **Create a new app** → **Examples** → **CRM**.
2. **2. Name**: **Shared CRM**. **3. Storage**: your cloud storage. Sign in if asked (**Sign In…**).
3. Click **Deploy**.

**Check your result:** in **Manage Apps**, Shared CRM is on the **Owner** tab.

### Part 2 (owner): Invite the other person

1. In **Manage Apps**, click Shared CRM's **⋮** and choose **👥 Sharing**. The **Sharing** panel opens beside the list.

**Dropbox or OneDrive:**

2. Under **Invite by email**, type the other person's email (the one their Dropbox or Microsoft account uses).
3. Choose their access: **Read-Write** or **Read-Only**.
4. Click **Invite**.
   - **Dropbox** sends them an invitation email.
   - **OneDrive** also gives you a share link, with **✉ Email** and **Copy** buttons. Send them the link: they'll paste it to join.

**iCloud Drive:** iCloud apps are shared from Finder or the Files app, not from inside *RacerX*. The Sharing panel shows the app's folder:

2. On a Mac, click **📂 Show in Finder**, then right-click the selected folder → **Share…**.
3. Leave **Share a Link** and **People you choose can edit** as they are, choose **Messages** or **Mail**, and send it to their Apple account.

**Check your result:** for Dropbox and OneDrive, the person appears in the member list, marked **Pending** until they accept.

### Part 3 (member): Join the app

The other person opens *RacerX* on their own computer, clicks **＋ Add App** → **Join someone else's app**, and chooses where it was shared:

- **Dropbox**: open the invitation email from Dropbox and click the button to open the shared folder (this adds it to their Dropbox). Then come back and click **Search**.
- **OneDrive**: copy the link the owner sent, paste it into **Paste the link the owner sent you…**, and click **Find App**.
- **iCloud Drive**: open the invitation (Messages or Mail) and accept it, wait for the folder to appear in iCloud Drive, then click **Search**.

Then click **Add** next to **Shared CRM**.

**On an iPhone:** **Add App** → **Join someone else's app**. For Dropbox, **Look in my Dropbox** after accepting the email; for OneDrive, paste the link; for iCloud Drive, choose the shared folder.

**Check your result:** Shared CRM is in the member's sidebar, and on the **Shared with me** tab of their **Manage Apps**, with their access and the owner shown.

### Part 4: See what each person can do

| | Owner | Read-Write member | Read-Only member |
|---|---|---|---|
| See records | Yes | Yes | Yes |
| Add, edit and delete records | Yes | Yes | No |
| Design the app (Schema Editor) | Yes | No | No |
| Share, import and export | Yes | Only if the owner allows it | No |
| Delete the app for everyone | Yes | No | No |
| Remove it from their own sidebar | (Delete instead) | Yes: **Remove from Navigation** | Yes: **Remove from Navigation** |

Try it:

1. **Member:** add a contact. **Owner:** after the next check (or **Sync** in the Sync Dashboard), the contact appears.
2. **Owner:** in the Sharing panel, change the member's access to **Read-Only**.
3. **Member:** after the next sync, **+ New** and **Edit** are gone.
4. **Owner (Dropbox or OneDrive):** tick **Allow read-write members to share, import, and export** at the bottom of the Sharing panel to let Read-Write members do those too. Editing the design and deleting stay owner-only.

To remove a member, click the trash icon on their row in the Sharing panel and confirm with **Yes**.

### What you learned

- Inviting someone to a cloud app, and the differences between Dropbox, OneDrive and iCloud Drive.
- Joining an app someone shared with you.
- What owners, Read-Write members and Read-Only members can do.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

## Tutorial 5: Reports and live report blocks

Video: coming soon

**Goal:** add a report page to an app that shows live data from a query.

Time: about 20 minutes

You'll need: the **My CRM** app from Tutorial 1 (any app you own works).

### Part 1: Get the SQL for a list

1. Open **My CRM**, then **Contacts**.
2. Sort and filter the list the way you want the report to show it (for example, sort by **Last Name**).
3. Click **Copy SQL** at the top of the list. It briefly shows **✓ Copied**. You now have a report block on the clipboard: the query that produces this list, ready to paste.

### Part 2: Add a report

1. Open **Manage Apps** → My CRM's **⋮** → **✏️ Schema Editor**.
2. Under **Reports** on the left, click **+ Add Report**. Double-click its name to rename it, for example **Contact list**.
3. The report editor has the source on one side and a live preview on the other. Type a heading and a sentence, for example:

```text
### Contacts

Everyone in the CRM, by last name.
```

4. Paste (⌘V on a Mac, Ctrl+V on Windows and Linux) below the text. The report block appears in the source and the preview runs it, showing the table.
5. Click **Save**.

A report block in the source looks like this: three backticks and the word **report**, the SQL, then three backticks on their own line.

````text
```report
SELECT t."first_name", t."last_name", t."email"
FROM "contacts_…" t
ORDER BY t."last_name"
```
````

You don't need to type the table names: **Copy SQL** (in a list or in the SQL Viewer) fills them in. The toolbar's **📊 SQL Widget** inserts a block from one of the app's views instead.

**Check your result:** close the Schema Editor tab, open My CRM, and click **Contact list** under **Reports**. The table shows the current contacts. Add a contact, then look at the report again: it's there.

### Part 3: Make it personal with {me}

In a report's SQL, **{me}** stands for the account looking at it. For example, in an app with a user field, *WHERE assignee = {me}* shows each person only their own rows. (In an app kept on this device only, there's no account, so it matches nothing.)

### What you learned

- Copying the SQL for a list with **Copy SQL**.
- Adding a report with text and a live report block.
- Report blocks run when the report is shown, so they always show current data.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

## Tutorial 6: Using AI to design an app and to query it

Video: coming soon

**Goal:** add a table to an app by describing it, and ask a question of the data in plain English.

Time: about 20 minutes

You'll need: an API key from one AI provider (Claude from Anthropic, OpenAI, or Gemini from Google), and an app you own, such as **My CRM** from Tutorial 1.

**About keys and costs.** The AI features use your own key, so the provider bills you directly, under their terms and prices; *RacerX* doesn't charge for AI. New accounts often get free credits (Gemini has a free tier). Set a spending limit in your provider's account before you start.

### Part 1: Add your key

1. In the sidebar, click **🔑 API Keys**.
2. Pick a provider. If you don't have a key yet, click **Get API key ↗**: the provider's page opens in your browser (console.anthropic.com, platform.openai.com/api-keys or aistudio.google.com/app/apikey).
3. Create a key there, copy it, paste it into the box and click **Save**.

**Check your result:** the provider shows as set up.

### Part 2: Add a table with the AI Assistant

1. Open My CRM's **Schema Editor** (Manage Apps → **⋮** → **✏️ Schema Editor**).
2. Click **✨ AI** in the toolbar. The **✨ AI Assistant** panel opens on the right. Choose your provider under **AI provider**.
3. Type: *Add a Meetings table with a date, a subject, notes, and a lookup to the contact.* Press Enter.
4. The assistant may ask a question or two. Answer, or type **go** to let it start.
5. Watch the tables update in the editor as it applies its changes.
6. Click **Validate** in the panel to check the result. Each problem has an **AI Fix** button; **Dismiss** hides one you want to ignore.
7. Look over the new table, then click **Save** in the editor's toolbar. Nothing is saved until you do.

**Check your result:** My CRM has a **Meetings** table whose contact field is a lookup to Contacts. **↩ Undo** takes back the assistant's whole change in one step, if you don't like it.

Each reply shows its tokens and an estimated cost. The conversation is kept for next time; **Clear** starts over.

### Part 3: Ask a question in the SQL Viewer

1. Click **SQL Viewer** in the sidebar.
2. Open the **✦ Generate** section (click its **+**). Choose your provider.
3. In **Describe what you want to query…**, type: *Which companies have deals, and what's the total deal value per company?*
4. Click **Generate**. The SQL appears in the editor above.
5. Read it, then click **▶ Run**.

**Check your result:** one row per company with deals: Acme Corp 12,000 and GlobalTech 5,000.

The AI is sent your tables' and columns' names and your question, not your data. The SQL Viewer only runs queries that read data; it can't change anything.

### What you learned

- Adding an AI provider key, and who pays for AI use.
- Changing an app's design by describing it, then validating and saving.
- Generating SQL from a plain-English question.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

## Tutorial 7: Working offline and on several devices

Video: coming soon

**Goal:** see how an app keeps in step across devices, what happens offline, and how to read the Sync Dashboard.

Time: about 20 minutes

You'll need: a cloud app (for example **Shared CRM** from Tutorial 4, or any app in Dropbox, OneDrive or iCloud Drive) on two devices: two computers, or a computer and an iPhone. On the second device, add it with **＋ Add App** → **Add my apps from my other devices**.

### Part 1: A change on one device reaches the other

1. On device A, open the app and add a contact.
2. On device B, open **Sync Dashboard** and click **Sync** on the app's row (or wait for the next automatic check).

**Check your result:** the contact appears on device B. In the dashboard, the app's **Last checked** time is now.

### Part 2: Work offline

1. On device A, turn off Wi-Fi (or unplug the network).
2. Add another contact. It saves at once: *RacerX* works from the copy on the device.
3. Open the **Sync Dashboard**. The app's dot turns amber (waiting) when it next tries to sync, and the **Sync Log** says why.
4. Turn the network back on. At the next check, or when you click **Sync**, the change uploads.

**Check your result:** the contact you added offline reaches device B. Nothing was lost.

**On an iPhone:** while offline, the cloud dots in the menu turn red; tap one to see why. They turn green again on their own once the phone is back online.

### Part 3: Read the Sync Dashboard

1. Each row is an app, with its storage icon and a dot: green fine, amber waiting, red a problem. **Last checked**, **Next run** and **Interval FG/BG** show its schedule.
2. Below, the **Notifications** tab lists messages *RacerX* has shown you; the **Sync Log** tab lists each sync and design change, newest first.
3. Untick every app except one, using the boxes beside them. The Sync Log shows only that app's lines, plus lines that aren't about one app (signing in, searching for apps), which always show for context.
4. Click **⏸ Pause** on an app's row. It stops checking on this device until you click **▶ Resume**; your changes wait on the device.

### Part 4: When something looks wrong

If records from another device seem to be missing:

1. Click **Sync** on the app's row, and read its newest Sync Log lines.
2. If that doesn't help, open **Manage Apps** → the app's **⋮** → **↺ Re-download all data** and confirm. It fetches everything again and merges it in; nothing on this device is deleted, and changes not yet uploaded are kept.

### What you learned

- How changes travel between devices, and how to sync right away.
- That *RacerX* works offline and catches up later.
- Reading the Sync Dashboard, filtering the Sync Log, and pausing an app.
- What to do when data seems to be missing.

**Beta testers:** tell us where you got stuck, what was unclear, and how long it really took.

# Using Apps

## Apps, tables and records

An **app** holds one or more **tables**. Each table holds **records** (rows), and each record has **fields** (columns) defined by the app's owner. A field can be text, long text, a number, a date, a date and time, a choice from a list (**Select**), a checkbox, a person (**User**), or a **Lookup** that links to a record in another table.

Open an app by clicking it in the sidebar. The panel on its left lists the tables under **Forms** and the app's reports under **Reports**. An owner can also add **views** (saved queries that join tables) to that list. Drag the panel's right edge to resize it.

Some tables are shown as a **conversation** instead of a list: messages as chat bubbles, newest at the bottom, like the **Chat** example. Type in the box at the bottom to post.

## The list

The list shows a table's records as rows, one column per field. Click a row to open its record.

**Sort and filter.** Click a column heading for its menu: **↑ Sort A → Z**, **↓ Sort Z → A**, and a **Filter contains…** box. You can filter several columns at once. A **Filtered** marker shows while any filter is on; click it (or **Clear filters**) to remove them all. Columns that come from a linked record can't be sorted or filtered.

**Columns.** Drag a heading's right edge to resize a column, or drag the heading to move it. The owner chooses which columns show and their starting order in the Schema Editor (**List** tab).

**Lookups** show the linked record's name (or whatever the owner chose with **Show as**), not a code.

**Copy SQL** copies the query behind the list as you see it (sorted and filtered), ready to paste into a report.

If a list takes too long to load (for example, sorted by a column of a very large linked table), use **Reset sort & filters**.

## The record panel

Click a row to open its record in the panel on the right. Drag the panel's left edge to resize it.

- **Edit** makes the fields editable. **Save** stays gray until you change something; **Cancel** puts everything back.
- **+ New** (at the top of the list) opens a **New Record** panel. It's grayed out while another record is being edited.
- **Delete** (at the bottom of the panel) asks **Delete this record?**; click **Yes, delete** to confirm.
- **Lookup fields:** click the field and type part of a name; matching records are listed. Pick one.
- Fields marked as filled in automatically (such as who created the record, and when) are read-only.

If you're a **Read-Only** member, **Edit**, **+ New** and **Delete** aren't shown.

A record can also show related records: a company, for example, lists its contacts and deals.

## Reports

A report is a page in an app: text (headings, lists, bold and so on) mixed with **report blocks** that run a query and show the results as a table. Reports are listed under **Reports** in the app's left panel. Every report block runs each time the report is shown, so it always shows current data.

Owners write reports in the Schema Editor (see **Designing reports**). **Tutorial 5** builds one step by step.

## Importing and exporting data

**Create an app from a file.** **＋ Add App** → **Create a new app** → **Start from**: **CSV or Excel file** (one table; the first row becomes the fields and their types are guessed; for Excel, the first sheet) or **SQLite database** (every table, with the links between them; from a file or a web address).

**Export an app's data.** **Manage Apps** → the app's **⋮** → **⬅ Export Data to CSVs** writes one CSV file per table to a folder named after the app in your **Downloads** folder.

**Import into an existing app.** **Manage Apps** → the app's **⋮** → **➡ Import Data from CSVs**. Pick one or more CSV files:

- Each file goes to the table whose id matches the file name (for example *contacts.csv*), or else the table whose fields best match its headings.
- Headings are the fields' **Column IDs**, as in an export.
- Imported rows are **added**; existing records aren't changed.
- The import reaches other devices through sync like any other change.

Export first to get files in the right shape. These menu items are for the owner, and for Read-Write members when the owner allows it. **Tutorial 3** walks through both.

# Designing Apps

## The Schema Editor

The Schema Editor is where an app's owner designs it. Open it from **Manage Apps** → the app's **⋮** → **✏️ Schema Editor**. It opens in its own tab.

**On the left:**

- **Tables**, with **+ Add Table**.
- **Views**, with **+ Add View**.
- **Reports**, with **+ Add Report**.
- **⚙️ Settings**, **📐 Data Model** and **🕘 Revision**.

Drag items to reorder them; the order is the order of the app's left panel. Double-click a name to rename it.

**The toolbar:**

- **↩ Undo** and **↪ Redo**.
- **✨ AI**, the AI Assistant.
- **● unsaved** when there are changes.
- **Save**. It's gray when there's nothing to save, and shows **✓** once saved. If the design has problems, **Couldn't save the schema** lists them.

**Your changes reach other devices.** When you save, the new design is uploaded with the app, and members' devices pick it up at their next check.

## Tables and fields

Select a table on the left. It has three tabs: **Fields**, **Record form** and **List**.

**Fields.** Each field has a **Label** (what people see), a **Column ID** (its name in the database: filled in from the label, locked once saved), a **Type**, and **Options / Lookup**:

| Type | For |
|---|---|
| **Text** | A short line of text |
| **Long Text** | Paragraphs |
| **Number** | Numbers |
| **Date** / **Date & Time** | Dates, with a date picker |
| **Select** | A choice from a list; type the options as *Option 1, Option 2…* |
| **Checkbox** | Yes or no |
| **Lookup** | A link to a record in another table (or the same table) |
| **User** | A person |

Add a field with **+ Add Field**; remove one with its trash icon (you're asked to confirm). Drag fields to reorder them. **Built-in fields** lists the fields every record has on its own (when it was created and changed, and by whom); they're filled in automatically and read-only on the form.

**Display as.** In a table's settings, **Display as** is **List (rows and a record form)** or **Conversation (chat bubbles)**. A conversation table has just a message field (and optionally a thread); to add fields, set it back to **List**. A list table can also get comments: a comment thread on every record.

## Lookups and Show as

A **Lookup** field links a record to a record in another table, chosen under **Options / Lookup**. In the app, people pick the linked record by typing part of its name.

**Show as** decides what the lookup shows in lists and on the form. By default it's automatic: a name or title field of the linked table (for example a company's name, or a contact's first and last name). The line reads, for example, **Show as: Company Name (automatic)**.

To choose, click **Change…** and tick the linked table's fields to show, in order (use the arrows to reorder); **Done** closes it, **Use automatic** goes back to the default.

**Chained lookups.** If the field shown is itself a lookup (a contact's deal, shown by the deal's company), the line shows the chain, for example **Show as: Company → Company Name (automatic)**, and *RacerX* shows the final name, not an id.

On the **Record form** tab you can also show a field *from* the linked record, read-only (**+ Related field**: for example, a contact's company's industry). In a view, **+ Related column** does the same for a column.

## The record form and the list

**Record form** is the layout of the record panel: sections with fields in them. Drag fields between sections; **+ Add Section** adds one; drop a field on **Drop to remove from form** to take it off. **None — every field is on the form** means nothing is left out.

**List** sets the list's columns: drag to reorder, click **Visible** / **Hidden** to choose which show. **Default Filters** (**+ Add Filter**) are applied when someone opens the table.

## Views

A view is a saved query that combines tables. Use one to show, for example, deals with their company's industry.

1. **+ Add View**, then choose its starting table.
2. **Joins** link other tables in (**Connect**); tick **Only show rows that have a match in both tables** to drop rows without a match.
3. **Fields** and **+ Related column** choose the columns; **Label override** renames one.
4. **Default Filters** narrow the rows.
5. **Navigation Placement**: **Replace table** shows the view in place of a table in the app's left panel; **Add as additional nav item** adds it as an extra item. A view that isn't placed is used only for reports.

**View SQL** shows the query the view runs.

## Designing reports

Under **Reports**, **+ Add Report** adds a page. The editor shows the source (Markdown text) beside a live preview.

**The toolbar:** **H1**, **H2**, **H3**, **Bold**, **Italic**, **Bulleted list**, **Code block**, and **📊 SQL Widget**, which inserts a report block from one of the app's views.

**Report blocks.** A report block is SQL between a line with three backticks and **report**, and a line with three backticks:

````text
```report
SELECT t."name", t."industry"
FROM "companies_…" t
ORDER BY t."name"
```
````

The easiest way to get one is **Copy SQL**, in a list (it copies the list as you see it, sorted and filtered) or in the SQL Viewer. Paste it into the source.

**{me}** in a report's SQL stands for the account viewing it, for example *WHERE created_by = {me}* for "what I created".

**Hidden reports.** A report can be hidden from the app and kept only in the Schema Editor, marked so on the left; the examples' *How this app is built* reports work this way.

## Settings, Data Model and Revision

**⚙️ Settings:**

- **Name and icon**: the app's name and its icon (click the icon to change it).
- **Description**.
- **Check for changes**: how often the app checks its storage. **While in front: every … seconds** (blank is the default: 5 minutes on Dropbox, 10 on OneDrive; 0 means only when the app opens) and **While in the background: every … seconds** (blank or 0 is off, the default). These apply to every device that uses the app.

**📐 Data Model** draws the app's tables and the links between them as a diagram. Zoom with **+** and **−**, and **Reset zoom**. You can download it as a PDF. Unsaved changes aren't in the diagram until you save.

**🕘 Revision** shows the design's revision number, like an app's build number: which revision this device has and which is in the cloud. Every save makes a new revision. Members see the same information in **Manage Apps** → **⋮** → **ℹ️ App info…**.

## The AI Assistant

The AI Assistant changes an app's design from a plain-English description. It needs your own AI provider key (see **API keys**).

1. In the Schema Editor, click **✨ AI**. The **✨ AI Assistant** panel opens on the right; drag the bar between them to resize it. (It isn't available on the Data Model and Revision pages.)
2. Choose the **AI provider**: **Claude**, **OpenAI** or **Gemini**. Providers without a key are marked.
3. Describe the change in **Describe what you want, or say "go" to start…**. The assistant asks a few questions until it understands; say **go** whenever you want it to start.
4. It applies its changes to the editor in front of you, in one or more batches for a big request, then says it's done.
5. Click **Validate** to check the design, then **Save** in the toolbar. **Nothing is saved until you click Save.**

**Undo:** each batch the assistant applies is one **↩ Undo** step.

**Costs:** each reply shows its tokens and an estimated cost. The provider bills your account directly. Every message sends the conversation so far, so long conversations cost more; **Clear** (then **Yes** in **Clear chat?**) starts over. The conversation is kept for each app until you clear it.

**Sample data:** the panel can also generate realistic sample data as CSV files in your Downloads folder, which you can then import.

## Validation

**Validate**, in the AI Assistant panel, checks the design before you save. It looks for:

- Duplicate table or field ids, and ids that aren't valid (lowercase letters, digits and underscores, starting with a letter) or that are reserved words in SQL.
- Tables with no fields.
- Lookups to tables that don't exist, and lookups that go round in a circle.
- **Select** fields with no options.
- Navigation items and view joins that point to missing tables.

It also warns about blank labels, tables with only built-in fields, and views with no fields.

Fix problems from the top of the list down: one mistake (a bad table id, say) can cause several errors below it. Each problem has **AI Fix**, which asks the assistant to fix just that one, and **Dismiss**, which hides it until you validate again.

# SQL Viewer

## SQL Viewer overview

The SQL Viewer lets you look at the data on this device directly, with SQL. It only **reads**: queries that would change data are refused. Open it from **SQL Viewer** in the sidebar.

- **Tables** (left): every table on this device, grouped by app, plus **System** and **Other** tables. Click one to fill in a query for it. Drag the panel's edge to resize it.
- **SQL**: write the query in **-- Write SQL here** and click **▶ Run** (or ⌘Enter / Ctrl+Enter). **Copy SQL** copies it as a report block for a report. The history button brings back earlier queries.
- **✦ Generate**: describe the query in plain English and let an AI write it (see the next page).
- **Results**: each query's results, with its columns and row count. **Clear** empties the list.

## Generating SQL with AI

1. Open the **✦ Generate** section (click its **+**).
2. Choose a provider: **Claude**, **OpenAI** or **Gemini**. A 🔑 means it has no key yet: click it, then **Get API key ↗** to get one, paste it and **Save**.
3. Type what you want in **Describe what you want to query…**, for example *open issues assigned to me, newest first*.
4. Click **Generate**. The SQL appears in the SQL box.
5. Read it, then **▶ Run**.

The AI is sent your tables' and columns' names and your question, never your data. **Recent prompts** brings back earlier descriptions. Charges go to your own provider account.

**Tips:** say what to filter and sort by, and how many rows you want. If the result isn't right, refine the description and generate again.

## The database on this device

Each app's tables are named after the table and the app: *tablename_appid*, for example *contacts_8ed1378550384effaa965d4da0844299*. Click a table in the **Tables** panel to see its exact name and columns; **Copy SQL** in an app's list writes a correct query for you.

Every record has these columns besides its fields:

| Column | Holds |
|---|---|
| `id` | The record's id |
| `created_at`, `updated_at` | When it was created and last changed, in seconds since 1970 |
| `created_by`, `updated_by` | The account that did it |

To show a record time as a date:

```sql
datetime(created_at, 'unixepoch', 'localtime')
```

**System tables** (read them, don't rely on their layout) include:

| Table | Holds |
|---|---|
| `workspaces`, `apps` | The apps on this device and where they live |
| `upload_queue` | Changes waiting to upload |
| `sync_log` | The Sync Dashboard's Sync Log (times in milliseconds) |
| `notification_log` | The Sync Dashboard's Notifications |
| `sharing_log` | Sharing, invite and app-search activity |
| `ai_conversations` | AI Assistant conversations |

## Sample queries

Replace the table names with yours (click a table in the **Tables** panel to get them).

**Contacts with their company (CRM example):**

```sql
SELECT c.first_name, c.last_name, co.name AS company
FROM contacts_APPID c
LEFT JOIN companies_APPID co ON co.id = c.company_id
ORDER BY c.last_name;
```

**Deal value per company:**

```sql
SELECT co.name AS company, SUM(d.value) AS total
FROM deals_APPID d
JOIN companies_APPID co ON co.id = d.company_id
GROUP BY co.name
ORDER BY total DESC;
```

**Records added in the last 7 days:**

```sql
SELECT first_name, last_name,
       datetime(created_at, 'unixepoch', 'localtime') AS added
FROM contacts_APPID
WHERE created_at > strftime('%s', 'now', '-7 days')
ORDER BY created_at DESC;
```

**Recent sync activity:**

```sql
SELECT datetime(ts / 1000, 'unixepoch', 'localtime') AS at, dir, text, is_error
FROM sync_log
ORDER BY ts DESC
LIMIT 50;
```

**Changes waiting to upload:**

```sql
SELECT app_id, record_type, attempt_count, last_error,
       datetime(created_at, 'unixepoch', 'localtime') AS queued
FROM upload_queue
ORDER BY created_at;
```

# Sync Dashboard

## Sync Dashboard overview

The Sync Dashboard shows how each app on this device is keeping in step with its storage, and what has happened recently. Open it from **Sync Dashboard** in the sidebar. The dot beside it is green when everything is fine and red when something needs attention.

The dashboard has two parts: the **apps** at the top and the **logs** below. Drag the bar between them to give either part more room; double-click the bar to put it back in the middle. This device remembers where you leave it.

**The apps**

One row per app, with its storage icon and a status dot (green: fine; amber: waiting, for example offline; red: a problem). The columns:

| Column | What it shows |
|---|---|
| Last checked | When this device last looked for changes: records changed on other devices, and whether the owner renamed, deleted or redesigned the app. A problem shows in red underneath; point at it for the details. |
| Next run | When the next automatic check is due. |
| Interval FG/BG | How often it checks while *RacerX* is in front / in the background. |
| Actions | **Sync** checks now. **⏸ Pause** stops automatic checks on this device until you **▶ Resume**; changes you make wait on this device and nothing is lost. |

**Sync All Now** (top right) checks every app at once. **● Issues detected** appears beside the title when any app has a problem.

**The logs**

- **Notifications**: messages this device has shown you (for example, an app removed by its owner), so you can read one you missed.
- **Sync Log**: each sync and design change, newest first, with the time. Problems are red, waiting is amber.

**Choosing which apps the Sync Log shows**

Tick the box beside an app to show its lines; untick it to hide them. The box in the heading ticks or unticks every app. The tab shows how many lines you're seeing, for example *Sync Log (16 of 21)*.

Lines that don't belong to a single app always show, whichever apps you tick: signing in or out of a storage, searching for apps, and checks that cover the whole storage. This is on purpose. When an app has a problem, these lines give the context around it: if an app couldn't download just after you were signed out, or right after a search for apps, you see both together.

**Clear Sync Log** / **Clear Notifications** empties the tab you're on, on this device only.

**Something not syncing?** Press **Sync** on the app's row and read its newest Sync Log lines. If records from other devices still seem to be missing, use **Re-download all data** (see the next page).

## Re-downloading an app's data

If records from other devices seem to be missing on this device, you can fetch everything again: open **Manage Apps**, click the app's **⋮** and choose **↺ Re-download all data** (cloud apps only). You're asked to confirm first. On an iPhone: **Manage Apps** → the app → **Re-download all data**.

**What it does:** fetches all of the app's data from cloud storage and merges it into this device's copy. Nothing on this device is deleted, and changes that haven't uploaded yet are kept.

**When to use it:**

- Records you know were added on another device don't appear here, even after **Sync** in the Sync Dashboard.
- A sync error keeps coming back and **Sync** doesn't clear it.

It can take a while for a large app. Watch its progress in the Sync Dashboard's Sync Log.

## Working offline

Everything keeps working offline: lists, records, reports and the SQL Viewer all use the copy on this device. Changes you make are saved there at once and wait to upload.

- In the Sync Dashboard, apps that can't reach their storage show an amber dot (waiting), and the Sync Log says why.
- When the connection comes back, the next check uploads what's waiting and downloads what others changed. **Sync** does it right away.
- Nothing is lost while you're offline. If someone else changed the same record meanwhile, the most recent save wins.
- Signing in, searching for apps and joining an app need a connection.

On an iPhone, the cloud dots in the menu turn red while it's offline, and go back to green on their own once it reconnects.

# Sharing and Managing Apps

## Manage Apps

**✏️ Manage Apps** (in the sidebar) lists every app on this device in two tabs:

- **Owner**: apps you own. Columns show **Members**, **Records**, **Size**, **Baseline** and **Changed**, as room allows.
- **Shared with me**: apps others shared with you, with your **Access**, the **Owner** and when it last **Synced**.

Each app has a **⋮** menu. What's in it depends on your role and the storage:

| Item | Who | What it does |
|---|---|---|
| **👥 Sharing** | Owner (cloud apps); Read-Write members if the owner allows it | Opens the Sharing panel |
| **ℹ️ App info…** | Everyone | Where the app lives, its folder, tables, last sync, and which design revision this device has |
| **↺ Re-download all data** | Everyone (cloud apps) | Fetches the app's data again and merges it in |
| **✏️ Schema Editor** | Owner | Design the app |
| **➡ Import Data from CSVs** / **⬅ Export Data to CSVs** | Owner | Add rows from CSV files; write the data to CSV files |
| **📦 Publish Baseline** | Owner (cloud apps) | Writes a snapshot of all the data, so a new device downloads one file instead of many. Worth doing after a big import |
| **🗑️ Delete App** | Owner | Deletes the app and all its data from its storage, for everyone it's shared with. Asks you to confirm |
| **⎋ Remove from Navigation** | Members | Removes it from this device only. It stays in the owner's storage; you can add it back anytime |

**Signed out:** apps you own in a cloud you're signed out of stay on the **Owner** tab marked **Signed out**; click it to sign in.

## Sharing an app

Only cloud apps can be shared: Dropbox, OneDrive, iCloud Drive or a network share. Open **Manage Apps** → the app's **⋮** → **👥 Sharing**. The Sharing panel opens beside the list (drag its edge to resize it) and lists the members, with a search box when there are many.

**Dropbox and OneDrive:** under **Invite by email**, type the person's email, choose **Read-Write** or **Read-Only**, and click **Invite**.

- Dropbox emails them an invitation. They accept it, then join with **Add App** → **Join someone else's app** → **Dropbox**.
- OneDrive also gives you a share link (**✉ Email** or **Copy**). They join with **Add App** → **Join someone else's app** → **OneDrive** and paste the link. The link stays available on their row as **Share link**.

Invited people show as **Pending** until they accept. Change someone's access with the menu on their row; remove them with the trash icon (**Remove?** → **Yes**).

**Allow read-write members to share, import, and export**, at the bottom, lets Read-Write members invite people and import and export data. Edit and delete remain owner-only.

**iCloud Drive:** iCloud apps are shared using Finder or the Files app's own Share feature, not from inside *RacerX*. The panel shows the app's folder. On a Mac, click **📂 Show in Finder**, right-click the selected folder → **Share…**, leave **Share a Link** and **People you choose can edit** as they are, and send it with **Messages** or **Mail**. On an iPhone or iPad, in the Files app, touch and hold the folder → **Share**. They join with **Add App** → **Join someone else's app** → **iCloud Drive**.

**Network File Share:** give the person's account access to the shared folder on the server (on a Mac, System Settings → General → Sharing → File Sharing; on Windows, the folder's Properties → Sharing → Advanced Sharing → Permissions). They join with **Add App** → **Join someone else's app** → **Network File Share**. Phones and tablets can't open network-share apps.

## Who can do what

| | Owner | Read-Write | Read-Only |
|---|---|---|---|
| See records and reports | Yes | Yes | Yes |
| Add, edit and delete records | Yes | Yes | No |
| Design the app, rename it, change its icon | Yes | No | No |
| Share, import, export | Yes | If the owner allows it | No |
| Publish Baseline, Delete App | Yes | No | No |
| Re-download, App info, Remove from Navigation | Yes (Delete instead of Remove) | Yes | Yes |

**Owner-only actions are checked with the storage itself.** *RacerX* asks Dropbox, OneDrive or iCloud who owns the app, rather than trusting a file in the app's folder that a member could change. If it can't confirm you're the owner, it doesn't let the action happen. That's why Windows can't do owner tasks on iCloud apps: Windows can't ask iCloud who owns a folder.

**When an owner deletes an app,** members' devices remove it at their next check and show a notification (also kept in the Sync Dashboard's **Notifications**).

## API keys

The AI features (the Schema Editor's **✨ AI** Assistant and the SQL Viewer's **✦ Generate**) use your own key from an AI provider. Add one with **🔑 API Keys** in the sidebar:

| Provider | Key looks like | Get one at |
|---|---|---|
| **Claude** (Anthropic) | sk-ant-… | console.anthropic.com |
| **OpenAI** | sk-… | platform.openai.com/api-keys |
| **Gemini** (Google) | AIza… | aistudio.google.com/app/apikey |

**Get API key ↗** opens the provider's page. Paste the key and click **Save**. Keys are kept on this device, in its secure storage, and are sent only to that provider.

**Costs** are between you and the provider, under their terms: *RacerX* doesn't charge for AI and never sees your billing. Anthropic gives new accounts trial credits, Gemini has a free tier, and OpenAI needs a card. Set a spending limit in your provider's account.

# Architecture

## Platform architecture

Every desktop version has three layers: a thin native **shell**, a **Node.js backend**, and the **React UI** shown in a web view. Nothing runs on any company server; each install is a complete, self-sufficient copy.

**Layer 1: native shell.** It creates the window, starts the backend as a child process, hosts the web view, and passes the operating system's events (waking from sleep, coming to the front or going to the background) to the backend. It also provides what a web page can't do: opening links in the browser, native folder pickers, printing.

| Platform | Shell | Web view | Node.js |
|---|---|---|---|
| macOS | Swift (`macos-shell/`) | WKWebView | Bundled in *RacerX* (`Contents/Resources/node`) |
| Windows | C# WinForms (`windows-shell/`) | WebView2 (Edge) | Installed Node.js (dev build); the backend's output is logged to `%APPDATA%\racerx\node.log` |
| Linux | Python, GTK 4 (`ubuntu-shell/racerx.py`); Flatpak packaging in `flatpak/` | WebKitGTK | System or Flatpak-bundled Node.js |

**Layer 2: Node.js backend** (`backend/src/server/index.js`). A plain Node HTTP and WebSocket server on `127.0.0.1:7722`, reachable only from this device. It owns all input and output:

- the local SQLite database (better-sqlite3),
- the Dropbox and Microsoft Graph APIs, iCloud Drive and network-share folders,
- sign-ins and their tokens,
- the sync engine (upload queue, download jobs, app supervisor, baselines),
- downloading the User Guide,
- WebSocket messages that tell the UI when data changed.

On macOS, a small Swift helper (`rx-icloud-sharing`) answers who owns an iCloud folder, which Node can't read itself.

**Layer 3: React UI** (`web-ui/`), built with Vite. It talks to the backend only over `fetch()` and the WebSocket, and has no direct disk or network access of its own.

**The iPhone version** of *RacerX* is a Flutter app (`lib/`, `packages/`) with the same data layout and sync model, reading the same cloud files.

## Data architecture

There are two kinds of storage: a local SQLite database on each device, and files in the app's storage.

**The local database.** One file per device (see **Storage locations**). The backend opens two connections: a read-write one for changes, and a read-only one for queries (the SQL Viewer uses the read-only one). Only the Node process opens the file.

**Core tables** include `workspaces` (each app's hidden workspace: name, storage, folder, owner, access), `apps`, `members`, `app_schemas` (each app's design), `upload_queue`, `sync_log`, `sync_cursors`, `sync_state`, `notification_log`, `sharing_log`, `ai_conversations` and `deleted_workspace_paths`.

**App tables** are created from the app's design: one SQLite table per app table, named `{tableId}_{appId without dashes}`, with a column per field plus `id`, `created_at`, `updated_at`, `created_by` and `updated_by`. Record times are Unix **seconds**; log times are milliseconds.

**One app, one workspace.** Internally every app lives in its own workspace (a folder with a little metadata), which people never see. Sharing, ownership and deletion happen at that level.

**Files in storage.** Each saved change is a small JSON file; a delete is a "tombstone" file; a bulk import or a baseline is one larger file holding many records. Newer changes win: when two devices change the same record, the one saved later wins on every device. No merging, no diffs: simple and predictable.

## Sync engine

The sync engine (`backend/src/sync/`) runs a few kinds of jobs per app, each on its own timer.

**Upload.** Saving a record writes it to the local table and adds a row to `upload_queue` in the same step, so the record shows at once. The upload processor sends each queued change to the app's records folder as `{timestampMs}_{tableId}_{recordId}.json`, then removes it from the queue. A failure leaves it queued, with an attempt count and a next-retry time, and it's retried later; nothing is dropped silently.

**Download.** Each app's download job lists the files added since its last **cursor** (Dropbox's list cursor, OneDrive's delta link, or the newest file seen in a folder), downloads them, applies them to the local tables (tombstones delete), and moves the cursor on. If the provider says the cursor is too old (OneDrive's "resync required"), the job lists everything again in the same run.

**Baseline.** An owner can publish a `baseline.json` snapshot of all records (**Publish Baseline**). A new device applies the baseline first, then only the files written after it. Big imports to cloud storage are uploaded as a baseline or bulk file for the same reason.

**Supervisor.** A per-app supervisor checks the app's own metadata: whether the owner renamed it, redesigned it (a new schema revision) or deleted it (the folder's deletion marker), and members' details.

**Timing.** Foreground interval: 5 minutes by default (10 for OneDrive), or what the owner set. Background: off by default. The engine also checks right away when *RacerX* comes to the front or the device wakes. **Sync**, **Sync All Now** and **Pause** in the Sync Dashboard drive these jobs by hand.

## Authentication and credentials

Dropbox and OneDrive use OAuth 2. Your password goes only to the provider.

1. You choose to sign in; the backend starts the sign-in.
2. Your default browser opens the provider's sign-in page (through the shell's link-opening bridge).
3. After you approve, the provider redirects back to *RacerX* (a localhost address on desktop) with a one-time code.
4. The backend exchanges the code for an access token and a refresh token, and stores them.

**Where tokens are kept** (`backend/src/sync/kv.js`):

| Platform | Primary | Fallback |
|---|---|---|
| macOS | Keychain (via keytar) | `~/.racerx/kv.json` |
| Windows | Credential Manager (via keytar) | `%USERPROFILE%\.racerx\kv.json` |
| Linux | Secret Service / libsecret (via keytar) | a JSON file in the data folder (`$XDG_DATA_HOME/racerx/kv.json` in the Flatpak, else `~/.racerx/kv.json`) |

The fallback file is created readable only by you. On Windows ARM64, keytar has no prebuilt binary, so the file is always used there.

**Refreshing.** Access tokens expire after hours. Before each cloud call the backend checks the token and refreshes it when needed. An expired or revoked sign-in shows as signed out (the Owner tab's **Signed out**; on the phone, a red dot with **Sign in again**).

**macOS keychain prompts.** After installing or updating, macOS may ask whether *RacerX* may use your login keychain. Click **Always Allow**. If you deny it, sign-in won't be remembered after a restart.

**Signing out** removes the tokens for that provider. The local database stays until you reset *RacerX*.

## Cloud storage layout

For Dropbox and OneDrive, everything lives under one top-level folder whose name comes from `CLOUD_ROOT` in `backend/src/cloud-paths.js` (in API paths, all lowercase). iCloud Drive and network shares use the same layout inside the folder you chose.

```text
/<root>/
  <app name> (<short id>)/                 ← one folder per app (its hidden workspace)
    _rx_meta.json                          ← name, owner, created_at
    apps/
      <appId>/
        schema.json                        ← the app's design, with its revision
        _rx_app_meta.json                  ← app type, name, icon
        PROD/
          records/
            <tsMs>_<tableId>_<recordId>.json   ← one change
            <tsMs>_bulk_<uuid>.json            ← an import or other bulk change
            baseline.json                      ← owner-published snapshot
          tombstones/
            <tsMs>_<tableId>_<recordId>_deleted.json
```

Each app folder is named after the app plus a short id, so two apps with the same name don't collide. A deleted app leaves a small deletion marker in its folder, which members' devices act on. Members' display names come from the provider at runtime and from small "people" files members write; there's no member list file an owner maintains.

**Not in storage:** the local database, preferences, sign-in tokens, *RacerX* itself.

## Build system and native modules

Each desktop platform has its own build script. All three produce the same runtime: shell → backend → UI.

**macOS** (`macos-shell/build.sh`):

1. Checks that `better-sqlite3` loads with the bundled Node.js, so the native module's ABI matches the Node that runs it.
2. Builds the React UI.
3. Builds the Swift shell with Xcode.
4. Copies the UI and the backend (server, sync, sharing, fileshare modules) into the *RacerX* app bundle.
5. Builds the iCloud sharing helper.
6. Launches *RacerX*.

**Windows** (`windows-shell/build.ps1`): pulls the latest code, runs `setup.ps1` if anything is missing (Node.js, Python, .NET 8 SDK), reinstalls the backend's `node_modules` with the system Node.js first on `PATH` (see **Windows ARM64 notes**), builds the React UI and the C# shell, and launches the app.

**Linux** (`ubuntu-shell/build.sh`, first run `ubuntu-shell/setup.sh`): installs the backend's modules, builds the UI, and launches the GTK shell. The Flatpak (`flatpak/build.sh`) builds and installs a sandboxed version with its own data folder.

**Native modules:**

| Module | Purpose | Notes |
|---|---|---|
| `better-sqlite3` | SQLite | Prebuilt binaries ship in the package for every platform, including Windows ARM64 |
| `keytar` | Keychain / Credential Manager / libsecret | No Windows ARM64 binary: the file fallback is used there |

A native module built for a different Node.js version or CPU fails at startup ("invalid ELF header" on Linux, "not a valid Win32 application" on Windows, or a module-version mismatch). Fix: delete `backend/node_modules` and run the platform's build script. On a Mac, always use the build script (the bundled Node), not a system Node.js.

**UI only:** `npm run dev` in `web-ui/` runs the Vite dev server at `http://localhost:5173`, using the running app's backend.

# Support

## Frequently asked questions

**What happens to my apps when I sign out of Dropbox or OneDrive?**

They stay on this device. Apps you own there stay on the **Owner** tab of **Manage Apps**, marked **Signed out**, and their storage icon in the sidebar is dimmed. Nothing is lost, but nothing syncs either: changes you make, including owner tasks such as Sharing or Publish Baseline, can't reach the cloud until you sign in again. Click **Signed out** (or the Dropbox or OneDrive icon at the bottom of the sidebar) to sign in.

If you sign in to a *different* Dropbox or OneDrive account, apps owned by the first account aren't yours under that account, so they move to **Shared with me**.

Apps on this device only, on a network share or in iCloud Drive don't depend on signing in.

**Can I move an app to different storage?** Not yet. Create a new app in the new storage and import the data: export to CSVs, then import.

**Where do I find my app's files in Dropbox or OneDrive?** On the provider's website, in *RacerX*'s own top-level folder, one folder per app.

**Does *RacerX* work without the internet?** Yes. See **Working offline**.

**Why can't I create an iCloud app on Windows?** Windows can't ask iCloud who owns a folder, so the owner couldn't share or delete it from Windows. Create it on a Mac, iPhone or iPad; Windows can then use it.

## Storage locations

Where *RacerX* keeps things on each platform. You'll need these for resets, backups and diagnosis.

**macOS.** The shell looks for the database in these places, in order, and uses the first that exists:

| | Path |
|---|---|
| 1 | `~/Library/Containers/com.racerx.racerx/Data/Library/Application Support/com.racerx.racerx/racerx.db` |
| 2 | `~/Library/Containers/com.example.racerx/Data/Library/Application Support/com.example.racerx/racerx.db` |
| 3 | `~/Library/Application Support/com.example.racerx/racerx.db` |

The current development build uses the third.

| What | Where |
|---|---|
| Database | One of the paths above |
| Sign-in tokens | The keychain (search Keychain Access for *RacerX*), or `~/.racerx/kv.json` |
| Web view storage (preferences) | Inside *RacerX*'s container or Library folder |
| Backend log | Xcode's console, or Console.app; no log file |

**Windows**

| What | Where |
|---|---|
| Database | `%APPDATA%\racerx\racerx.db` (the shell also checks `%APPDATA%\com.example\racerx\` and `%APPDATA%\com.racerx\racerx\` first) |
| Sign-in tokens | Credential Manager, or `%USERPROFILE%\.racerx\kv.json` (always the file on ARM64) |
| Backend output | `%APPDATA%\racerx\node.log` (the previous run's is `node.prev.log`) |
| Web view storage (preferences) | `RacerX.exe.WebView2\` next to the program (in the dev build, `windows-shell\bin\Debug\net8.0-windows\`), not in `%APPDATA%` |

**Linux**

| What | Where |
|---|---|
| Database | `~/.local/share/com.example.racerx/racerx.db` |
| Database (Flatpak) | Inside `~/.var/app/com.gansler.RacerX/` |
| Sign-in tokens | The keyring (libsecret), or the kv.json fallback |

**Cloud storage:** in Dropbox and OneDrive, *RacerX*'s top-level folder (reached through the provider's API; you don't need their desktop programs). In iCloud Drive or on a network share, the folder you chose.

## Reset procedures: macOS

Resets *RacerX* on a Mac to a first-launch state.

**A full reset removes:** the local database (the copy of your data on this Mac), the sign-in tokens, and the web view's stored preferences. **It doesn't touch** anything in cloud storage.

1. **Quit *RacerX*.**
2. **Delete *RacerX*'s data.** For a sandboxed build, delete the `Data/` folder inside its container, not the container itself (macOS protects a file there and the command fails):

```bash
rm -rf ~/Library/Containers/com.racerx.racerx/Data/
rm -rf ~/Library/Containers/com.example.racerx/Data/
rm -rf ~/Library/Application\ Support/com.example.racerx/
rm -rf ~/.racerx/
```

3. **Remove the keychain entries:** open **Keychain Access** (Applications → Utilities), search for *RacerX* and delete its entries, or in Terminal:

```bash
security delete-generic-password -s "RacerX" 2>/dev/null; true
```

4. **Open *RacerX* again.** Sign in again, and add your apps back with **Add App** → **Add my apps from my other devices**.

The bundle id will change before the App Store release; this page will change with it.

## Reset procedures: Windows

Resets *RacerX* on Windows to a first-launch state. Nothing in cloud storage is touched.

Quit *RacerX*, then run these in PowerShell. They remove, in order: the database, log and backend data; the sign-in tokens (file fallback); and the web view storage, which is next to the program, not in AppData (the dev build's path is shown).

```powershell
Remove-Item -Recurse -Force "$env:APPDATA\racerx" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:USERPROFILE\.racerx" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "windows-shell\bin\Debug\net8.0-windows\RacerX.exe.WebView2" -ErrorAction SilentlyContinue
```

Run the last line from the repository folder. Also remove *RacerX*'s entries in **Credential Manager** if keytar was used (x64).

**Why the web view folder matters:** preferences such as light or dark mode live in the web view's storage, which isn't in `%APPDATA%`. Delete both for a truly clean start.

Then start *RacerX* again (`.\windows-shell\build.ps1` for the dev build) and sign in.

If it crashes at startup mentioning `better-sqlite3`, see **Windows ARM64 notes**.

## Windows ARM64 notes

On ARM64 Windows (Parallels on Apple Silicon, Surface and Snapdragon PCs), native Node.js modules must match the CPU.

**The problem: two Node.js programs.** With `fnm` installed, `C:\Program Files\nodejs\node.exe` is ARM64, but fnm's own Node is x64, and fnm puts itself first on `PATH`. When `npm install` runs `better-sqlite3`'s install script, it uses whichever `node` is first, sees `x64`, and downloads the x64 binary. The app then starts with the ARM64 Node, which can't load it ("not a valid Win32 application").

**The fix (in `build.ps1` and `setup.ps1`):** before installing the backend's modules, put the system Node first:

```powershell
$env:PATH = "$env:ProgramFiles\nodejs;$env:PATH"
$sysNpm = "$env:ProgramFiles\nodejs\npm.cmd"
if (Test-Path $sysNpm) { & $sysNpm install } else { try { npm install } catch { } }
```

**keytar** has no ARM64 Windows binary at all. Loading it fails quietly, and sign-in tokens go to `%USERPROFILE%\.racerx\kv.json` instead. Everything else works normally.

**Check:** the first command should print `arm64`, the second `OK`.

```powershell
& "$env:ProgramFiles\nodejs\node.exe" -e "console.log(process.arch)"
& "$env:ProgramFiles\nodejs\node.exe" -e "require('./backend/node_modules/better-sqlite3'); console.log('OK')"
```

If the second fails, delete `backend\node_modules` and run `build.ps1` again.

## Diagnostic tools

**Sync Dashboard.** The first place to look: each app's status, **Last checked**, the problem under it in red (point at it for details), and the **Sync Log** and **Notifications**.

**App info.** **Manage Apps** → **⋮** → **ℹ️ App info…**: where the app lives, its folder, its tables, its last sync, and which design revision this device has against the cloud's.

**SQL Viewer.** Read-only queries on the local database. Useful ones:

```sql
-- Changes waiting to upload
SELECT app_id, record_type, attempt_count, last_error,
       datetime(created_at, 'unixepoch', 'localtime') AS queued
FROM upload_queue ORDER BY created_at;

-- Recent sync activity
SELECT datetime(ts / 1000, 'unixepoch', 'localtime') AS at, dir, text, is_error
FROM sync_log ORDER BY ts DESC LIMIT 30;

-- The apps on this device and where they live
SELECT id, name, cloud_provider, my_access, root_path FROM workspaces;

-- Download positions
SELECT * FROM sync_cursors;
```

**Backend log on Windows:** `%APPDATA%\racerx\node.log` (the previous run is `node.prev.log`). Common startup errors:

- `SQLITE_CANTOPEN`: the database folder doesn't exist; see the reset procedure.
- `not a valid Win32 application` loading `better-sqlite3` or `keytar`: an ARM64/x64 mismatch; see **Windows ARM64 notes**.
- `listen EADDRINUSE`: an earlier backend didn't exit and still holds port 7722; end `node.exe` in Task Manager.

**Backend log on macOS:** the Xcode console when run from Xcode, or Console.app (search for *RacerX*). There's no log file.

**Web Inspector:** in debug builds on macOS, Safari's **Develop** menu → *RacerX* connects the Web Inspector.

## Records not syncing

If records added or changed on one device don't appear on another:

1. **Sync now.** On the receiving device, open the **Sync Dashboard** and click **Sync** on the app's row. Look at its newest **Sync Log** lines.
2. **Check the sending device uploaded.** On the device where the change was made, look at its Sync Log, or run the `upload_queue` query (see **Diagnostic tools**). Rows there are waiting to upload; a `last_error` says why.
3. **Check both are online and signed in.** An amber or red dot, or **Signed out** in Manage Apps, explains a lot.
4. **Check the app isn't paused** (**▶ Resume** on its row means it is).
5. **Re-download.** If records are still missing, **Manage Apps** → **⋮** → **↺ Re-download all data**.

## Sign-in issues

**My apps show "Signed out".** You're signed out of that cloud on this device, or its sign-in expired. Click **Signed out** (or the dimmed Dropbox or OneDrive icon at the bottom of the sidebar) to sign in. Nothing is lost meanwhile; changes wait to upload. See **Frequently asked questions**.

**The browser said I signed in, but *RacerX* didn't notice.** Go back to *RacerX* and wait a few seconds. If nothing changes, start the sign-in again. If it still fails, restart *RacerX* and try once more.

**macOS asks for my keychain password.** After installing or updating, click **Always Allow**. It shouldn't ask again.

**On an iPhone, the cloud dot is red.** Tap it. If it says the phone isn't connected to the internet, it clears by itself once it's back online. If it says the sign-in expired or was turned off, tap **Sign in to … again**.

**I signed in to the wrong account.** Sign out (click the provider's icon → **Sign out of …**) and sign in with the right one. You can use one account per provider on a device.

**Still stuck:** see the reset procedure for your platform.

## Finding apps: errors

When **Add App** → **Add my apps from my other devices** searches your storage:

**"Dropbox: your sign-in has expired. Sign in again, then search again."** Click the provider's **Sign In…** and search again.

**"Dropbox: not signed in."** (or OneDrive) Tick only signed-in storage, or sign in first.

**"No apps found that aren't already on this device."** Everything there is already here. If you expected an app someone shared with you, use **Join someone else's app** instead; a Dropbox share must be accepted from the invitation email first.

**Apps you expected are missing.** You may be signed in to a different account of that provider than the one that holds them. Check which account is signed in by pointing at the icon at the bottom of the sidebar.

**Network share or iCloud Drive: "no folder chosen."** The search needs you to choose the share's folder (or, on Windows, your iCloud Drive folder). Search again and choose it.

## Debugging sharing and invites

Every invite, access change and app search is logged on the device that did it, in the `sharing_log` table. Run this in the **SQL Viewer**:

```sql
SELECT datetime(ts / 1000, 'unixepoch', 'localtime') AS at, message, is_error
FROM sharing_log ORDER BY ts DESC LIMIT 30;
```

**Run it on both devices** when something looks wrong. The owner's device logs the invite and the provider's reply; the member's device logs its own search or join. Each has half the picture.

**A healthy invite** shows an invite line followed by the provider's reply (a Dropbox invitee, or a OneDrive permission with its roles). If that's there, the invitation reached the provider; a member who can't find the app yet is a separate question (has the Dropbox invitation been accepted? was the OneDrive link pasted?).

**Sharing with support:** the query's output is plain text you can copy and send. It's the first thing anyone helping will ask for.

## Performance tips

- **Very large apps:** after a big import to cloud storage, use **Publish Baseline** so new devices download one file instead of thousands.
- **A slow list:** sorting or filtering by a column from a very large linked table can be slow; **Reset sort & filters** gets you back.
- **Count a table's records** in the SQL Viewer: `SELECT COUNT(*) FROM contacts_APPID;` (Manage Apps' **Records** column shows it too).
- **Checks use the network:** a slow connection makes syncs slow, not *RacerX* itself; lists and records always come from this device.
- **Reports** run every block each time they're shown; keep report queries simple, with an `ORDER BY` and a sensible `LIMIT`.
